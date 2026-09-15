import React, { useState } from 'react';
import { MOCK_STAMPS } from '../../data/mockHeritageData';
import { HISTORICAL_JOURNEYS } from '../../data/historicalJourneys';
import { HeritageStamp } from '../../types';
import { CollectibleStamp } from '../common/CollectibleStamp';
import { Stamp, Award, CheckCircle2, Lock, Compass, Sparkles, X, Shield, Landmark, Scroll } from 'lucide-react';
import { CoordinateChip } from '../common/CoordinateChip';

interface PassportScreenProps {
  userXp?: number;
  unlockedBadges?: string[];
  completedJourneyIds?: string[];
  exploredCulturalIds?: string[];
}

export const PassportScreen: React.FC<PassportScreenProps> = ({
  userXp = 350,
  unlockedBadges = [],
  completedJourneyIds = [],
  exploredCulturalIds = [],
}) => {
  const [selectedStamp, setSelectedStamp] = useState<HeritageStamp | null>(null);

  // Determine unlocked stamps based on actual completed journeys and defaults
  const dynamicStamps = MOCK_STAMPS.map((stamp) => {
    // If user completed a journey for Brihadisvara, unlock Brihadisvara stamp
    const isCholaUnlocked = completedJourneyIds.includes('rajaraja-chola-journey') && stamp.id === 'stamp-thanjavur';
    const isUnlocked = stamp.isUnlocked || isCholaUnlocked || unlockedBadges.length > 0;
    return {
      ...stamp,
      isUnlocked,
    };
  });

  const unlockedCount = dynamicStamps.filter((s) => s.isUnlocked).length;
  const totalCount = dynamicStamps.length;
  const completionPercentage = Math.round((unlockedCount / totalCount) * 100);

  // Get all available journey badges
  const journeyBadges = HISTORICAL_JOURNEYS.map((j) => ({
    ...j.awardedBadge,
    journeyTitle: j.title,
    characterName: j.character.name,
    isUnlocked: unlockedBadges.includes(j.awardedBadge.id) || completedJourneyIds.includes(j.id),
  }));

  return (
    <div className="w-full pb-28 min-h-screen bg-[#FAF7F2] p-4 max-w-4xl mx-auto space-y-6">
      {/* Passport Header Dossier */}
      <div className="p-4 bg-[#F3ECE2] border border-[#B8863B]/40 rounded-xs shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="label-caps text-[#A8422B] text-[10px] flex items-center gap-1 font-bold">
              <Stamp className="w-3.5 h-3.5 text-[#B8863B]" /> HERITAGE PASSPORT BOOK
            </span>
            <span className="text-[#8A726C] text-xs font-mono">// ARCHIVAL RESEARCHER LOG</span>
          </div>
          <span className="label-mono-spatial text-[10px] text-[#1A2744] bg-[#CDD9FF]/40 px-2 py-0.5 border border-[#1A2744]/20 rounded-xs font-bold">
            RESEARCHER FOLIO
          </span>
        </div>

        <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif-display text-2xl font-bold text-[#191B21]">
              Sanctuary Stamps & Curatorial Honors
            </h2>
            <p className="text-xs text-[#57423D] mt-0.5 font-sans-ui">
              Official verification seals and sovereign badges acquired upon completing historical journeys and cataloging heritage.
            </p>
          </div>

          {/* Progress & XP Metric */}
          <div className="shrink-0 flex items-center gap-2">
            <div className="p-2.5 bg-[#FAF7F2] border border-[#B8863B]/30 rounded-xs flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#A8422B]" />
              <div>
                <div className="text-[9px] font-mono text-[#8A726C] uppercase">
                  Total Heritage XP
                </div>
                <div className="font-serif-display font-bold text-base text-[#882B16]">
                  {userXp} XP
                </div>
              </div>
            </div>

            <div className="p-2.5 bg-[#FAF7F2] border border-[#B8863B]/30 rounded-xs flex items-center gap-3">
              <div>
                <div className="text-[9px] font-mono text-[#8A726C] uppercase">
                  Acquired Seals
                </div>
                <div className="font-serif-display font-bold text-base text-[#A8422B]">
                  {unlockedCount}/{totalCount} Sites
                </div>
              </div>
              <div className="w-8 h-8 rounded-full border border-[#A8422B] flex items-center justify-center font-mono text-[11px] font-bold text-[#1A2744] bg-[#FFD7CE]/30">
                {completionPercentage}%
              </div>
            </div>
          </div>
        </div>

        {/* Trail Progress Meter */}
        <div className="mt-3 pt-3 border-t border-[#B8863B]/20 flex items-center gap-2">
          <div className="flex-1 h-2 bg-[#E2E2EA] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#A8422B] to-[#B8863B] transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-[#57423D] font-bold">
            {unlockedCount} of {totalCount} Monumental Seals Active
          </span>
        </div>
      </div>

      {/* Archival Recognition Badges */}
      <div className="p-4 bg-[#FAF7F2] border border-[#B8863B]/40 rounded-xs space-y-3 shadow-xs">
        <div className="flex items-center justify-between pb-2 border-b border-[#B8863B]/25">
          <span className="label-caps text-[#A8422B] text-[10.5px] font-bold flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#B8863B]" />
            SOVEREIGN EXPEDITION BADGES ({journeyBadges.filter((b) => b.isUnlocked).length}/{journeyBadges.length})
          </span>
          <span className="text-[10px] font-mono text-[#8A726C]">
            EARNED VIA HISTORICAL JOURNEYS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {journeyBadges.map((badge) => (
            <div
              key={badge.id}
              className={`p-3.5 rounded-xs border transition-all flex items-start gap-3.5 ${
                badge.isUnlocked
                  ? 'bg-[#F3ECE2] border-[#A8422B] shadow-xs'
                  : 'bg-[#FAF7F2] border-[#B8863B]/20 opacity-60'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xs flex flex-col items-center justify-center shrink-0 border ${
                  badge.isUnlocked
                    ? 'bg-[#A8422B] text-[#FFD9A9] border-[#882B16]'
                    : 'bg-[#EAE0D3] text-[#8A726C] border-[#B8863B]/30'
                }`}
              >
                {badge.isUnlocked ? (
                  <Landmark className="w-6 h-6 text-[#FFD9A9]" />
                ) : (
                  <Lock className="w-5 h-5 text-[#8A726C]" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-serif-display font-bold text-sm text-[#191B21] truncate">
                    {badge.name}
                  </h4>
                  {badge.isUnlocked && (
                    <span className="px-1.5 py-0.2 bg-[#E8F5E9] text-[#2E7D32] text-[9px] font-mono font-bold rounded-xs">
                      ACQUIRED
                    </span>
                  )}
                </div>
                <p className="text-[11px] font-mono text-[#882B16] mt-0.5">
                  {badge.title}
                </p>
                <p className="text-[11.5px] text-[#57423D] line-clamp-2 mt-1 font-sans-ui">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Milestones Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 bg-[#F3ECE2] border border-[#B8863B]/30 rounded-xs text-center">
          <span className="text-[9.5px] font-mono uppercase text-[#8A726C] block">
            Passport XP
          </span>
          <span className="font-serif-display text-xl font-bold text-[#882B16]">
            {userXp}
          </span>
        </div>

        <div className="p-3 bg-[#F3ECE2] border border-[#B8863B]/30 rounded-xs text-center">
          <span className="text-[9.5px] font-mono uppercase text-[#8A726C] block">
            Badges Earned
          </span>
          <span className="font-serif-display text-xl font-bold text-[#A8422B]">
            {unlockedBadges.length}
          </span>
        </div>

        <div className="p-3 bg-[#F3ECE2] border border-[#B8863B]/30 rounded-xs text-center">
          <span className="text-[9.5px] font-mono uppercase text-[#8A726C] block">
            Living Culture Items
          </span>
          <span className="font-serif-display text-xl font-bold text-[#1A2744]">
            {exploredCulturalIds.length}
          </span>
        </div>

        <div className="p-3 bg-[#F3ECE2] border border-[#B8863B]/30 rounded-xs text-center">
          <span className="text-[9.5px] font-mono uppercase text-[#8A726C] block">
            Journeys Completed
          </span>
          <span className="font-serif-display text-xl font-bold text-[#2A5235]">
            {completedJourneyIds.length}
          </span>
        </div>
      </div>

      {/* Stamp Album Grid */}
      <div className="p-4 bg-[#FAF7F2] border-2 border-dashed border-[#B8863B]/30 rounded-xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#B8863B]/20">
          <span className="label-caps text-[#684300] text-[10px] font-bold">
            ALBUM FOLIO 01: MONUMENTAL CIRCUITS
          </span>
          <span className="text-[10px] font-mono text-[#8A726C]">
            TAP STAMP TO EXAMINE ACCESSION LOG
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 justify-items-center py-4">
          {dynamicStamps.map((stamp) => (
            <div key={stamp.id} className="flex flex-col items-center">
              <CollectibleStamp
                stamp={stamp}
                size="md"
                onClick={() => setSelectedStamp(stamp)}
              />
              <div className="mt-2 text-center">
                <span className="text-[11px] font-medium text-[#191B21] block line-clamp-1">
                  {stamp.siteName}
                </span>
                <span className="text-[10px] text-[#8A726C] font-mono">
                  {stamp.trailName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stamp Inspection Modal */}
      {selectedStamp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#12151B]/75 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-md bg-[#FAF7F2] border border-[#B8863B]/60 shadow-2xl rounded-sm overflow-hidden flex flex-col">
            <div className="p-3 bg-[#F3ECE2] border-b border-[#B8863B]/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="label-mono-spatial text-[#A8422B] text-[10px]">
                  SEAL RECORD // {selectedStamp.accessionTag}
                </span>
              </div>
              <button
                onClick={() => setSelectedStamp(null)}
                className="text-[#8A726C] hover:text-[#A8422B] p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 flex flex-col items-center text-center space-y-4">
              <CollectibleStamp stamp={selectedStamp} size="lg" />

              <div className="mt-2">
                <h3 className="font-serif-display text-xl font-bold text-[#191B21]">
                  {selectedStamp.siteName}
                </h3>
                <p className="text-xs text-[#684300] font-mono mt-0.5">
                  State of {selectedStamp.state} • {selectedStamp.trailName}
                </p>
              </div>

              <div className="w-full p-3 bg-[#F3ECE2] border border-[#B8863B]/30 rounded-xs text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#8A726C]">Historical Milestone:</span>
                  <span className="font-medium text-[#191B21]">
                    {selectedStamp.historicalMilestone}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A726C]">Geographical Fix:</span>
                  <span className="font-mono text-[#A8422B]">
                    {selectedStamp.coordinates}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8A726C]">Field Status:</span>
                  <span
                    className={`font-bold uppercase text-[10px] ${
                      selectedStamp.isUnlocked ? 'text-[#882B16]' : 'text-[#8A726C]'
                    }`}
                  >
                    {selectedStamp.isUnlocked
                      ? `Stamped on ${selectedStamp.unlockedDate}`
                      : 'Pending Site Expedition'}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#8A726C] italic">
                {selectedStamp.isUnlocked
                  ? 'Authenticated in accordance with the National Heritage Field Preservation protocol.'
                  : 'Travel to this site or complete its architectural blueprint study to stamp your passport.'}
              </p>
            </div>

            <div className="p-3 bg-[#F3ECE2] border-t border-[#B8863B]/30 flex justify-end">
              <button
                onClick={() => setSelectedStamp(null)}
                className="px-4 py-1.5 bg-[#A8422B] text-white hover:bg-[#C25438] text-xs font-bold uppercase rounded-xs border border-[#882B16] cursor-pointer"
              >
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
