/**
 * Cross-Navigation Utilities for Anvaya
 *
 * This module provides relationship mapping between the four core sections:
 * 1. Cartography (WHERE?) - Heritage landmarks and geography
 * 2. Culture (WHAT?) - Living cultural traditions
 * 3. Chronology (WHEN?) - Historical timelines and dynasties
 * 4. Dossier (EVIDENCE?) - Research documents and sources
 */

import { HERITAGE_LANDMARKS } from '../data/heritageLandmarks';
import { CULTURAL_ITEMS } from '../data/culturalHeritage';
import { CHRONOLOGY_EPOCHS } from '../data/chronologyData';
import { RESEARCH_DOSSIERS } from '../data/dossierData';
import { HISTORICAL_JOURNEYS } from '../data/historicalJourneys';

export interface CrossNavigationLink {
  type: 'cartography' | 'culture' | 'chronology' | 'dossier' | 'journey';
  id: string;
  label: string;
  subtitle?: string;
}

/**
 * Get related content for a heritage landmark
 */
export function getRelatedContentForLandmark(landmarkId: string): {
  dossiers: CrossNavigationLink[];
  chronology: CrossNavigationLink[];
  culture: CrossNavigationLink[];
  journey: CrossNavigationLink | null;
} {
  const landmark = HERITAGE_LANDMARKS.find(l => l.id === landmarkId);
  if (!landmark) {
    return { dossiers: [], chronology: [], culture: [], journey: null };
  }

  // Find related dossiers
  const dossiers = RESEARCH_DOSSIERS
    .filter(d => d.landmarkId === landmarkId || d.associatedSite?.includes(landmark.name))
    .map(d => ({
      type: 'dossier' as const,
      id: d.id,
      label: d.title,
      subtitle: d.evidenceType ? d.evidenceType.replace(/-/g, ' ').toUpperCase() : undefined,
    }));

  // Find related chronology (by dynasty)
  const chronology: CrossNavigationLink[] = [];
  CHRONOLOGY_EPOCHS.forEach(epoch => {
    epoch.dynasties?.forEach(dynasty => {
      if (dynasty.name.toLowerCase().includes(landmark.dynasty.toLowerCase()) ||
          landmark.dynasty.toLowerCase().includes(dynasty.name.toLowerCase())) {
        chronology.push({
          type: 'chronology',
          id: dynasty.id,
          label: dynasty.name,
          subtitle: dynasty.period,
        });
      }
    });
  });

  // Find related culture (by state/region)
  const culture = CULTURAL_ITEMS
    .filter(c => {
      const matchesState = c.state === landmark.state;
      const matchesRegion = landmark.region.toLowerCase().includes(c.state.toLowerCase());
      const matchesDynasty = c.historicalSignificance?.toLowerCase().includes(landmark.dynasty.toLowerCase());
      return matchesState || matchesRegion || matchesDynasty;
    })
    .slice(0, 3)
    .map(c => ({
      type: 'culture' as const,
      id: c.id,
      label: c.name,
      subtitle: c.category.replace(/-/g, ' '),
    }));

  // Find related journey
  const journey = HISTORICAL_JOURNEYS.find(j => j.landmarkId === landmarkId);
  const journeyLink = journey ? {
    type: 'journey' as const,
    id: journey.id,
    label: journey.title,
    subtitle: `+${journey.totalXp} XP`,
  } : null;

  return { dossiers, chronology, culture, journey: journeyLink };
}

/**
 * Get related content for a cultural item
 */
export function getRelatedContentForCulture(cultureId: string): {
  landmarks: CrossNavigationLink[];
  chronology: CrossNavigationLink[];
} {
  const item = CULTURAL_ITEMS.find(c => c.id === cultureId);
  if (!item) {
    return { landmarks: [], chronology: [] };
  }

  // Find landmarks in the same state/region
  const landmarks = HERITAGE_LANDMARKS
    .filter(l => {
      const matchesState = l.state === item.state;
      const matchesRegion = l.region.toLowerCase().includes(item.state.toLowerCase());
      return matchesState || matchesRegion;
    })
    .slice(0, 2)
    .map(l => ({
      type: 'cartography' as const,
      id: l.id,
      label: l.name,
      subtitle: l.state,
    }));

  // Find related chronology by matching historical references
  const chronology: CrossNavigationLink[] = [];
  CHRONOLOGY_EPOCHS.forEach(epoch => {
    epoch.dynasties?.forEach(dynasty => {
      const matchesDynasty = item.historicalSignificance?.toLowerCase().includes(dynasty.name.toLowerCase());
      const matchesPeriod = item.timePeriodOrOrigin?.toLowerCase().includes(dynasty.name.toLowerCase());
      if (matchesDynasty || matchesPeriod) {
        chronology.push({
          type: 'chronology',
          id: dynasty.id,
          label: dynasty.name,
          subtitle: dynasty.period,
        });
      }
    });
  });

  return { landmarks, chronology };
}

/**
 * Get related content for a dynasty/chronology entry
 */
export function getRelatedContentForDynasty(dynastyId: string, epochId: string): {
  landmarks: CrossNavigationLink[];
  culture: CrossNavigationLink[];
  journeys: CrossNavigationLink[];
  dossiers: CrossNavigationLink[];
} {
  const epoch = CHRONOLOGY_EPOCHS.find(e => e.id === epochId);
  const dynasty = epoch?.dynasties?.find(d => d.id === dynastyId);

  if (!dynasty) {
    return { landmarks: [], culture: [], journeys: [], dossiers: [] };
  }

  // Find landmarks from this dynasty
  const landmarks = dynasty.associatedSites
    .filter(site => site.landmarkId)
    .map(site => ({
      type: 'cartography' as const,
      id: site.landmarkId!,
      label: site.name,
      subtitle: site.location,
    }));

  // Find research dossiers for this dynasty or its sites
  const siteLandmarkIds = dynasty.associatedSites.map(s => s.landmarkId).filter(Boolean);
  const dossiers = RESEARCH_DOSSIERS
    .filter(d => {
      const matchesEra = d.associatedEra?.toLowerCase().includes(dynasty.name.toLowerCase()) ||
        dynasty.name.toLowerCase().includes(d.associatedEra?.toLowerCase() || '');
      const matchesLandmark = d.landmarkId && siteLandmarkIds.includes(d.landmarkId);
      const matchesSite = dynasty.associatedSites.some(s => d.associatedSite?.toLowerCase().includes(s.name.toLowerCase()));
      return matchesEra || matchesLandmark || matchesSite;
    })
    .map(d => ({
      type: 'dossier' as const,
      id: d.id,
      label: d.title,
      subtitle: d.evidenceType ? d.evidenceType.replace(/-/g, ' ').toUpperCase() : undefined,
    }));

  // Find cultural items from this dynasty
  const culture = CULTURAL_ITEMS
    .filter(c => {
      const matchesDynasty = c.historicalSignificance?.toLowerCase().includes(dynasty.name.toLowerCase()) ||
        c.shortDescription?.toLowerCase().includes(dynasty.name.toLowerCase());
      const matchesPeriod = c.timePeriodOrOrigin?.toLowerCase().includes(dynasty.name.toLowerCase());
      return matchesDynasty || matchesPeriod;
    })
    .slice(0, 3)
    .map(c => ({
      type: 'culture' as const,
      id: c.id,
      label: c.name,
      subtitle: c.state,
    }));

  // Find historical journeys
  const journeys = HISTORICAL_JOURNEYS
    .filter(j => j.dynasty.toLowerCase().includes(dynasty.name.toLowerCase()) ||
      dynasty.name.toLowerCase().includes(j.dynasty.toLowerCase()) ||
      siteLandmarkIds.includes(j.landmarkId))
    .map(j => ({
      type: 'journey' as const,
      id: j.id,
      label: j.character.name,
      subtitle: `+${j.totalXp} XP Journey`,
    }));

  return { landmarks, culture, journeys, dossiers };
}

/**
 * Get related content for a dossier
 */
export function getRelatedContentForDossier(dossierId: string): {
  landmark: CrossNavigationLink | null;
  chronology: CrossNavigationLink[];
  culture: CrossNavigationLink[];
} {
  const dossier = RESEARCH_DOSSIERS.find(d => d.id === dossierId);
  if (!dossier) {
    return { landmark: null, chronology: [], culture: [] };
  }

  // Find related landmark
  let landmark: CrossNavigationLink | null = null;
  if (dossier.landmarkId) {
    const l = HERITAGE_LANDMARKS.find(lm => lm.id === dossier.landmarkId);
    if (l) {
      landmark = {
        type: 'cartography',
        id: l.id,
        label: l.name,
        subtitle: l.state,
      };
    }
  }

  // Find related chronology by era
  const chronology: CrossNavigationLink[] = [];
  if (dossier.associatedEra) {
    CHRONOLOGY_EPOCHS.forEach(epoch => {
      epoch.dynasties?.forEach(dynasty => {
        if (dossier.associatedEra?.toLowerCase().includes(dynasty.name.toLowerCase())) {
          chronology.push({
            type: 'chronology',
            id: dynasty.id,
            label: dynasty.name,
            subtitle: dynasty.period,
          });
        }
      });
    });
  }

  // Find related culture by region
  const culture = dossier.associatedRegion
    ? CULTURAL_ITEMS
        .filter(c => {
          const region = dossier.associatedRegion || '';
          return region.toLowerCase().includes(c.state.toLowerCase());
        })
        .slice(0, 2)
        .map(c => ({
          type: 'culture' as const,
          id: c.id,
          label: c.name,
          subtitle: c.category.replace(/-/g, ' '),
        }))
    : [];

  return { landmark, chronology, culture };
}
