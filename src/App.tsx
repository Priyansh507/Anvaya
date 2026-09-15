import React, { useState, useEffect } from 'react';
import { ScreenType, HeritageLandmark, Artifact, ChronologyEra, HistoricalJourney, CulturalItem, FieldDossier } from './types';
import { Header } from './components/common/Header';
import { BottomNavController } from './components/common/BottomNavController';
import { ArchiveSearchModal } from './components/common/ArchiveSearchModal';
import { ExploreScreen } from './components/screens/ExploreScreen';
import { VitrineScreen } from './components/screens/VitrineScreen';
import { PassportScreen } from './components/screens/PassportScreen';
import { ChronologyScreen } from './components/screens/ChronologyScreen';
import { DossiersScreen } from './components/screens/DossiersScreen';
import { HistoricalJourneyArchivesScreen } from './components/screens/HistoricalJourneyArchivesScreen';
import { CulturalExplorerScreen } from './components/screens/CulturalExplorerScreen';
import { HISTORICAL_JOURNEYS } from './data/historicalJourneys';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('explore');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [selectedLandmarkId, setSelectedLandmarkId] = useState<string | null>(null);
  const [selectedCulturalId, setSelectedCulturalId] = useState<string | null>(null);
  const [selectedDynastyId, setSelectedDynastyId] = useState<string | null>(null);
  const [selectedEpochId, setSelectedEpochId] = useState<string | null>(null);
  const [selectedDossierId, setSelectedDossierId] = useState<string | null>(null);
  const [activeJourney, setActiveJourney] = useState<HistoricalJourney | null>(null);
  const [userXp, setUserXp] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('anvaya_user_xp');
      return saved ? JSON.parse(saved) : 350;
    } catch {
      return 350;
    }
  });
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('anvaya_unlocked_badges');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [completedJourneyIds, setCompletedJourneyIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('anvaya_completed_journey_ids');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [exploredCulturalIds, setExploredCulturalIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('anvaya_explored_cultural_ids');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('anvaya_user_xp', JSON.stringify(userXp));
      localStorage.setItem('anvaya_unlocked_badges', JSON.stringify(unlockedBadges));
      localStorage.setItem('anvaya_completed_journey_ids', JSON.stringify(completedJourneyIds));
      localStorage.setItem('anvaya_explored_cultural_ids', JSON.stringify(exploredCulturalIds));
    } catch {
      // ignore
    }
  }, [userXp, unlockedBadges, completedJourneyIds, exploredCulturalIds]);

  // Keyboard shortcut for ⌘K / Ctrl+K search bar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const screenTitles: Record<ScreenType, string> = {
    explore: 'Cartography & Landmarks',
    cultural: 'Living Cultural Heritage',
    vitrine: 'Museum Vitrine',
    passport: 'Heritage Passport',
    chronology: 'Dynastic Chronology',
    dossiers: 'Curatorial Dossiers & Archives',
    'journey-archives': 'Historical Journey Archives',
  };

  const handleNavigateToCartography = (landmarkId: string) => {
    setSelectedLandmarkId(landmarkId);
    setCurrentScreen('explore');
  };

  const handleNavigateToCulture = (culturalId?: string, stateName?: string) => {
    if (culturalId) {
      setSelectedCulturalId(culturalId);
    }
    setCurrentScreen('cultural');
  };

  const handleNavigateToChronology = (dynastyId?: string, epochId?: string) => {
    if (dynastyId) setSelectedDynastyId(dynastyId);
    if (epochId) setSelectedEpochId(epochId);
    setCurrentScreen('chronology');
  };

  const handleNavigateToDossier = (dossierId: string) => {
    setSelectedDossierId(dossierId);
    setCurrentScreen('dossiers');
  };

  const handleNavigateToJourney = (journeyId: string) => {
    const found = HISTORICAL_JOURNEYS.find((j) => j.id === journeyId);
    if (found) {
      setActiveJourney(found);
    }
    setCurrentScreen('journey-archives');
  };

  const handleSelectLandmarkFromSearch = (landmark: HeritageLandmark) => {
    handleNavigateToCartography(landmark.id);
  };

  const handleSelectArtifactFromSearch = (_artifact: Artifact) => {
    setCurrentScreen('cultural');
  };

  const handleSelectEraFromSearch = (era: ChronologyEra) => {
    setSelectedEpochId(era.id);
    setCurrentScreen('chronology');
  };

  const handleSelectCulturalItemFromSearch = (cultural: CulturalItem) => {
    handleNavigateToCulture(cultural.id);
  };

  const handleSelectDossierFromSearch = (dossier: FieldDossier) => {
    handleNavigateToDossier(dossier.id);
  };

  const handleCompleteJourney = (journeyId: string, awardedXp: number, badgeId: string) => {
    // Only award XP if this journey has not been completed before
    if (!completedJourneyIds.includes(journeyId)) {
      setUserXp((prev) => prev + awardedXp);
      setCompletedJourneyIds((prev) => [...prev, journeyId]);
    }
    // Always add badge (idempotent check inside)
    setUnlockedBadges((prev) => (prev.includes(badgeId) ? prev : [...prev, badgeId]));
  };

  const handleAwardCulturalXp = (itemId: string, xpReward: number) => {
    if (!exploredCulturalIds.includes(itemId)) {
      setExploredCulturalIds((prev) => [...prev, itemId]);
      setUserXp((prev) => prev + xpReward);
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAF7F2] text-[#191B21] flex flex-col font-sans-ui selection:bg-[#FFD7CE] selection:text-[#882B16]">
        {/* Neo-Archival Spatial Header */}
        <Header
          activeScreenTitle={screenTitles[currentScreen]}
          onOpenSearch={() => setIsSearchOpen(true)}
          userXp={userXp}
          currentScreen={currentScreen}
          onScreenChange={(screen) => setCurrentScreen(screen)}
        />

        {/* Main View Container */}
        <main className="flex-1 flex flex-col relative overflow-x-hidden">
          {currentScreen === 'explore' && (
            <ExploreScreen
              onOpenSearch={() => setIsSearchOpen(true)}
              onOpenArtifacts={() => setCurrentScreen('cultural')}
              selectedLandmarkId={selectedLandmarkId}
              onStartJourney={(journey) => {
                setActiveJourney(journey);
                setCurrentScreen('journey-archives');
              }}
              exploredCulturalIds={exploredCulturalIds}
              onExploreCulturalItem={handleAwardCulturalXp}
              onNavigateToCultureWithState={(stateName) => {
                setCurrentScreen('cultural');
              }}
              onNavigateToChronology={handleNavigateToChronology}
              onNavigateToDossier={handleNavigateToDossier}
              onNavigateToCulture={handleNavigateToCulture}
            />
          )}
          {currentScreen === 'cultural' && (
            <CulturalExplorerScreen
              exploredItemIds={exploredCulturalIds}
              onExploreItem={handleAwardCulturalXp}
              userXp={userXp}
              selectedItemId={selectedCulturalId}
              onNavigateToCartography={handleNavigateToCartography}
              onNavigateToChronology={handleNavigateToChronology}
            />
          )}
          {currentScreen === 'vitrine' && <VitrineScreen />}
          {currentScreen === 'passport' && (
            <PassportScreen
              userXp={userXp}
              unlockedBadges={unlockedBadges}
              completedJourneyIds={completedJourneyIds}
              exploredCulturalIds={exploredCulturalIds}
            />
          )}
          {currentScreen === 'chronology' && (
            <ChronologyScreen
              selectedEpochId={selectedEpochId}
              selectedDynastyId={selectedDynastyId}
              onSelectLandmark={handleNavigateToCartography}
              onStartJourney={handleNavigateToJourney}
              onNavigateToDossier={handleNavigateToDossier}
              onNavigateToCulture={handleNavigateToCulture}
            />
          )}
          {currentScreen === 'dossiers' && (
            <DossiersScreen
              selectedDossierId={selectedDossierId}
              onSelectLandmark={handleNavigateToCartography}
              onNavigateToChronology={handleNavigateToChronology}
              onNavigateToCulture={handleNavigateToCulture}
              onStartJourney={handleNavigateToJourney}
            />
          )}
          {currentScreen === 'journey-archives' && (
            <HistoricalJourneyArchivesScreen
              journey={activeJourney || HISTORICAL_JOURNEYS[0]}
              userXp={userXp}
              unlockedBadges={unlockedBadges}
              completedJourneyIds={completedJourneyIds}
              onBackToMap={() => {
                handleNavigateToCartography(activeJourney?.landmarkId || 'brihadisvara-thanjavur');
              }}
              onCompleteJourney={handleCompleteJourney}
            />
          )}
        </main>

        {/* Spatial Bottom Navigation Controller */}
        <BottomNavController
          currentScreen={currentScreen}
          onSelectScreen={setCurrentScreen}
        />

        {/* Spatial Archive Search Bar Modal */}
        <ArchiveSearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectLandmark={handleSelectLandmarkFromSearch}
          onSelectArtifact={handleSelectArtifactFromSearch}
          onSelectEra={handleSelectEraFromSearch}
          onSelectCulturalItem={handleSelectCulturalItemFromSearch}
          onSelectDossier={handleSelectDossierFromSearch}
        />
      </div>
    </LanguageProvider>
  );
}

