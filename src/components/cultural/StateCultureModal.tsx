import React, { useState, useMemo } from 'react';
import { CulturalItem } from '../../types';
import { getCulturalItemsByState } from '../../data/culturalHeritage';
import { CulturalItemCard } from './CulturalItemCard';
import { CulturalItemDetailModal } from './CulturalItemDetailModal';
import {
  X,
  Sparkles,
  MapPin,
  CheckCircle2,
  Compass,
  ArrowRight,
  Filter,
} from 'lucide-react';

interface StateCultureModalProps {
  stateName: string;
  isOpen: boolean;
  onClose: () => void;
  exploredItemIds?: string[];
  onExploreItem?: (itemId: string, xpReward: number) => void;
  onNavigateToCulturalScreen?: (stateName: string) => void;
}

export const StateCultureModal: React.FC<StateCultureModalProps> = ({
  stateName,
  isOpen,
  onClose,
  exploredItemIds = [],
  onExploreItem,
  onNavigateToCulturalScreen,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<CulturalItem | null>(null);

  const stateItems = useMemo(() => {
    return getCulturalItemsByState(stateName);
  }, [stateName]);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return stateItems;
    return stateItems.filter((i) => i.category === selectedCategory);
  }, [stateItems, selectedCategory]);

  const exploredCount = useMemo(() => {
    return stateItems.filter((item) => exploredItemIds.includes(item.id)).length;
  }, [stateItems, exploredItemIds]);

  const availableCategories = useMemo(() => {
    const set = new Set<string>();
    stateItems.forEach((i) => set.add(i.category));
    return Array.from(set);
  }, [stateItems]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#12151B]/75 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-[#FAF7F2] border-2 border-[#B8863B] w-full max-w-4xl max-h-[90vh] rounded-xs shadow-2xl flex flex-col overflow-hidden text-[#191B21]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#1A2744] text-[#FAF7F2] px-4 sm:px-6 py-3.5 border-b border-[#B8863B]/60 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xs bg-[#FAF7F2] text-[#882B16] flex items-center justify-center font-bold border border-[#B8863B]">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-wider uppercase text-[#FFD9A9] font-bold">
                  STATE CULTURAL REPOSITORY
                </span>
                <span className="text-white/40 text-xs font-mono">//</span>
                <span className="text-xs text-[#FFD9A9] font-mono font-bold">
                  {stateName.toUpperCase()}
                </span>
              </div>
              <h2 className="font-serif-display text-lg sm:text-xl font-bold text-[#FAF7F2] tracking-tight">
                Living Traditions & Master Artisans of {stateName}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xs hover:bg-white/10 text-[#FFD9A9] hover:text-white transition-colors cursor-pointer"
            title="Close cultural repository"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subheader with Metrics & Quick Filters */}
        <div className="bg-[#F3ECE2] border-b border-[#B8863B]/25 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Categories Pill Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto subtle-scroll">
            <span className="text-[10px] font-mono uppercase text-[#882B16] font-bold flex items-center gap-1 shrink-0">
              <Filter className="w-3 h-3 text-[#B8863B]" /> Domain:
            </span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-2 py-0.5 text-[10.5px] font-mono rounded-xs border shrink-0 transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#A8422B] text-white border-[#882B16] font-bold'
                  : 'bg-[#FAF7F2] text-[#57423D] border-[#B8863B]/30 hover:border-[#A8422B]'
              }`}
            >
              All ({stateItems.length})
            </button>
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2 py-0.5 text-[10.5px] font-mono rounded-xs border shrink-0 transition-colors cursor-pointer capitalize ${
                  selectedCategory === cat
                    ? 'bg-[#1A2744] text-[#FFD9A9] border-[#B8863B] font-bold'
                    : 'bg-[#FAF7F2] text-[#57423D] border-[#B8863B]/30 hover:border-[#A8422B]'
                }`}
              >
                {cat.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Progress metric */}
          <div className="flex items-center gap-2">
            <div className="px-2.5 py-1 bg-[#FAF7F2] border border-[#B8863B]/30 rounded-xs text-[10.5px] font-mono text-[#57423D] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2A5235]" />
              <span>Explored:</span>
              <span className="font-bold text-[#191B21]">
                {exploredCount} / {stateItems.length}
              </span>
            </div>
            {onNavigateToCulturalScreen && (
              <button
                onClick={() => {
                  onClose();
                  onNavigateToCulturalScreen(stateName);
                }}
                className="px-2.5 py-1 bg-[#A8422B] hover:bg-[#882B16] text-white text-[10.5px] font-mono font-bold tracking-wider uppercase rounded-xs border border-[#882B16] transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
              >
                <span>Full Cultural Explorer</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Items Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#FAF7F2] subtle-scroll">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredItems.map((item) => (
                <CulturalItemCard
                  key={item.id}
                  item={item}
                  isExplored={exploredItemIds.includes(item.id)}
                  onSelect={(selected) => setActiveItem(selected)}
                />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center bg-[#F3ECE2]/40 border border-[#B8863B]/25 rounded-xs p-6 max-w-md mx-auto space-y-3">
              <Compass className="w-8 h-8 text-[#B8863B] mx-auto opacity-60" />
              <h4 className="font-serif-display font-bold text-base text-[#191B21]">
                No Items in Selected Domain
              </h4>
              <p className="text-xs text-[#57423D]">
                Try selecting 'All' or another category to view the heritage artifacts of {stateName}.
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="px-3 py-1 bg-[#A8422B] text-white text-xs font-mono font-bold uppercase rounded-xs"
              >
                View All {stateName} Items
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#F3ECE2] border-t border-[#B8863B]/25 px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs text-[#8A726C] font-mono shrink-0">
          <span>Anvaya Intangible Cultural Heritage Registry</span>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-[#FAF7F2] hover:bg-[#FAF2EB] text-[#882B16] border border-[#B8863B]/30 rounded-xs font-bold cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>

      {/* Item Detail Modal if item selected */}
      {activeItem && (
        <CulturalItemDetailModal
          item={activeItem}
          isExplored={exploredItemIds.includes(activeItem.id)}
          onClose={() => setActiveItem(null)}
          onMarkExplored={(itemId, xp) => {
            if (onExploreItem) {
              onExploreItem(itemId, xp);
            }
          }}
        />
      )}
    </div>
  );
};
