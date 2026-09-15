import React, { useState, useEffect, useMemo } from 'react';
import { CulturalCategory, CulturalItem } from '../../types';
import {
  CULTURAL_CATEGORIES,
  CULTURAL_ITEMS,
  getCulturalCategories,
} from '../../data/culturalHeritage';
import { CulturalCategorySelector } from '../cultural/CulturalCategorySelector';
import { CulturalItemCard } from '../cultural/CulturalItemCard';
import { CulturalItemDetailModal } from '../cultural/CulturalItemDetailModal';
import {
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
  Compass,
  X,
  RotateCcw,
  MapPin,
  LayoutGrid,
  Layers,
  ChevronRight,
} from 'lucide-react';

interface CulturalExplorerScreenProps {
  exploredItemIds: string[];
  onExploreItem: (itemId: string, xpReward: number) => void;
  userXp: number;
  selectedItemId?: string | null;
  onNavigateToCartography?: (landmarkId: string) => void;
  onNavigateToChronology?: (dynastyId?: string, epochId?: string) => void;
}

export const CulturalExplorerScreen: React.FC<CulturalExplorerScreenProps> = ({
  exploredItemIds,
  onExploreItem,
  userXp: _userXp,
  selectedItemId,
  onNavigateToCartography,
  onNavigateToChronology,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CulturalCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'statewise' | 'grid'>('statewise');
  const [activeItem, setActiveItem] = useState<CulturalItem | null>(null);

  // Sync selected cultural item from cross-navigation
  useEffect(() => {
    if (selectedItemId) {
      const found = CULTURAL_ITEMS.find((c) => c.id === selectedItemId);
      if (found) {
        setActiveItem(found);
      }
    }
  }, [selectedItemId]);

  const categoriesWithCounts = useMemo(() => getCulturalCategories(), []);

  // Distinct regions from the curated items for regional filtering
  const availableRegions = useMemo(() => {
    const set = new Set<string>();
    CULTURAL_ITEMS.forEach((item) => set.add(item.region));
    return Array.from(set).sort();
  }, []);

  // Distinct states from curated items
  const availableStates = useMemo(() => {
    const set = new Set<string>();
    CULTURAL_ITEMS.forEach((item) => set.add(item.state));
    return Array.from(set).sort();
  }, []);

  // Filtered items based on Category, Region, State, and Search Query
  const filteredItems = useMemo(() => {
    return CULTURAL_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Region filter
      if (selectedRegion !== 'all' && item.region !== selectedRegion) {
        return false;
      }
      // State filter
      if (selectedState !== 'all' && item.state !== selectedState) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesNative = item.nativeName?.toLowerCase().includes(q) ?? false;
        const matchesState = item.state.toLowerCase().includes(q);
        const matchesRegion = item.region.toLowerCase().includes(q);
        const matchesDesc = item.shortDescription.toLowerCase().includes(q);
        const matchesTradition = item.relatedTradition.toLowerCase().includes(q);
        const matchesElements = item.primaryElements.some((el) =>
          el.toLowerCase().includes(q)
        );
        return (
          matchesName ||
          matchesNative ||
          matchesState ||
          matchesRegion ||
          matchesDesc ||
          matchesTradition ||
          matchesElements
        );
      }
      return true;
    });
  }, [selectedCategory, selectedRegion, selectedState, searchQuery]);

  // Group filtered items by state for the state-wise layout
  const itemsGroupedByState = useMemo(() => {
    const groups: Record<string, { region: string; items: CulturalItem[] }> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.state]) {
        groups[item.state] = {
          region: item.region,
          items: [],
        };
      }
      groups[item.state].items.push(item);
    });

    // Convert to sorted array of state sections
    return Object.keys(groups)
      .sort((a, b) => a.localeCompare(b))
      .map((state) => ({
        state,
        region: groups[state].region,
        items: groups[state].items,
      }));
  }, [filteredItems]);

  // Statistics for user progress
  const totalItemsCount = CULTURAL_ITEMS.length;
  const exploredCount = useMemo(() => {
    return CULTURAL_ITEMS.filter((item) => exploredItemIds.includes(item.id)).length;
  }, [exploredItemIds]);

  const culturalXpEarned = useMemo(() => {
    return CULTURAL_ITEMS.filter((item) => exploredItemIds.includes(item.id)).reduce(
      (sum, item) => sum + item.xpReward,
      0
    );
  }, [exploredItemIds]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedRegion('all');
    setSelectedState('all');
    setSearchQuery('');
  };

  return (
    <div className="w-full pb-28 lg:pb-12 min-h-screen bg-[#FAF7F2] text-[#191B21]">
      {/* Editorial Header & Archive Title */}
      <div className="bg-[#FAF7F2] border-b border-[#B8863B]/25 pt-5 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="label-caps text-[#A8422B] text-[10.5px] flex items-center gap-1.5 font-bold tracking-wider">
                  <Compass className="w-3.5 h-3.5 text-[#B8863B]" />
                  LIVING TRADITIONS // INTANGIBLE ARCHIVES
                </span>
                <span className="text-[#8A726C] text-xs font-mono">// STATE-WISE REPOSITORY</span>
              </div>

              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#191B21] mt-1 tracking-tight">
                Cultural Heritage & Artisans
              </h2>
              <p className="text-xs sm:text-sm text-[#57423D] mt-1 max-w-3xl font-sans-ui leading-relaxed">
                Explore the living cultural landscape of India state-by-state—master artisans, regional handlooms, culinary feasts, classical instruments, folk crafts, and vernacular architecture.
              </p>
            </div>

            {/* Curatorial Progress Metrics */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F3ECE2] border border-[#B8863B]/35 rounded-xs">
                <CheckCircle2 className="w-4 h-4 text-[#2A5235]" />
                <div className="text-left">
                  <div className="text-[9px] font-mono uppercase text-[#8A726C] tracking-wider">
                    EXPLORED
                  </div>
                  <div className="text-xs font-mono font-bold text-[#191B21]">
                    {exploredCount} / {totalItemsCount}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FAF2EB] border border-[#A8422B]/40 rounded-xs">
                <Sparkles className="w-4 h-4 text-[#A8422B]" />
                <div className="text-left">
                  <div className="text-[9px] font-mono uppercase text-[#882B16] tracking-wider">
                    CULTURAL XP
                  </div>
                  <div className="text-xs font-mono font-bold text-[#882B16]">
                    +{culturalXpEarned} XP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <CulturalCategorySelector
        categories={categoriesWithCounts}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        totalCount={totalItemsCount}
      />

      {/* Controls Bar: Search, View Mode Toggle, and Quick State Filter */}
      <div className="bg-[#F3ECE2]/70 border-b border-[#B8863B]/20 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-2.5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-3.5 h-3.5 text-[#B8863B] absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search state, craft, tradition, artisan..."
                className="w-full bg-[#FAF7F2] border border-[#B8863B]/35 rounded-xs pl-8 pr-7 py-1 text-xs text-[#191B21] placeholder-[#8A726C] focus:outline-none focus:border-[#A8422B] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8A726C] hover:text-[#191B21]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <div className="flex items-center bg-[#FAF7F2] border border-[#B8863B]/30 rounded-xs p-0.5">
                <button
                  onClick={() => setViewMode('statewise')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-xs transition-all cursor-pointer ${
                    viewMode === 'statewise'
                      ? 'bg-[#1A2744] text-[#FFD9A9] font-bold shadow-xs'
                      : 'text-[#57423D] hover:text-[#191B21]'
                  }`}
                  title="Group items by state"
                >
                  <Layers className="w-3 h-3 text-[#B8863B]" />
                  <span>Statewise View</span>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-xs transition-all cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-[#1A2744] text-[#FFD9A9] font-bold shadow-xs'
                      : 'text-[#57423D] hover:text-[#191B21]'
                  }`}
                  title="Show all items in a single grid"
                >
                  <LayoutGrid className="w-3 h-3 text-[#B8863B]" />
                  <span>All Items</span>
                </button>
              </div>

              {/* Reset filter button if any active */}
              {(selectedCategory !== 'all' ||
                selectedRegion !== 'all' ||
                selectedState !== 'all' ||
                searchQuery) && (
                <button
                  onClick={handleResetFilters}
                  className="px-2 py-1 text-[10.5px] font-mono text-[#882B16] bg-[#FAF2EB] hover:bg-[#F3ECE2] border border-[#A8422B]/30 rounded-xs flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* State Quick Navigation Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 subtle-scroll">
            <span className="text-[10px] font-mono uppercase text-[#882B16] font-bold flex items-center gap-1 shrink-0">
              <MapPin className="w-3 h-3 text-[#A8422B]" /> State:
            </span>
            <button
              onClick={() => setSelectedState('all')}
              className={`px-2.5 py-0.5 text-[10.5px] font-mono rounded-xs border shrink-0 transition-colors cursor-pointer ${
                selectedState === 'all'
                  ? 'bg-[#A8422B] text-white border-[#882B16] font-bold'
                  : 'bg-[#FAF7F2] text-[#57423D] border-[#B8863B]/30 hover:border-[#A8422B]'
              }`}
            >
              All States ({CULTURAL_ITEMS.length})
            </button>
            {availableStates.map((st) => {
              const countInState = CULTURAL_ITEMS.filter((i) => i.state === st).length;
              const isSelected = selectedState === st;
              return (
                <button
                  key={st}
                  onClick={() => setSelectedState(st)}
                  className={`px-2 py-0.5 text-[10.5px] font-mono rounded-xs border shrink-0 transition-colors cursor-pointer flex items-center gap-1 ${
                    isSelected
                      ? 'bg-[#1A2744] text-[#FFD9A9] border-[#B8863B] font-bold'
                      : 'bg-[#FAF7F2] text-[#57423D] border-[#B8863B]/30 hover:border-[#A8422B]'
                  }`}
                >
                  <span>{st}</span>
                  <span
                    className={`text-[9px] px-1 rounded-xs ${
                      isSelected ? 'bg-[#882B16] text-[#FFD9A9]' : 'bg-[#F3ECE2] text-[#8A726C]'
                    }`}
                  >
                    {countInState}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-[#F3ECE2]/40 border border-[#B8863B]/25 rounded-xs p-6 max-w-md mx-auto space-y-3">
            <Compass className="w-8 h-8 text-[#B8863B] mx-auto opacity-70" />
            <h3 className="font-serif-display font-bold text-lg text-[#191B21]">
              No Cultural Records Found
            </h3>
            <p className="text-xs text-[#57423D]">
              No items match your active filter criteria. Clear your search or change the active state/domain to inspect more heritage archives.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-3 py-1.5 bg-[#A8422B] text-white text-xs font-mono font-bold tracking-wider uppercase rounded-xs border border-[#882B16] inline-flex items-center gap-1.5 hover:bg-[#882B16] transition-colors cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Archive Filters</span>
            </button>
          </div>
        ) : viewMode === 'statewise' ? (
          /* State-wise Segregated View */
          <div className="space-y-10">
            {itemsGroupedByState.map(({ state, region, items }) => {
              const stateExploredCount = items.filter((i) =>
                exploredItemIds.includes(i.id)
              ).length;

              return (
                <section
                  key={state}
                  id={`state-section-${state.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-[#FAF7F2] border border-[#B8863B]/30 rounded-xs overflow-hidden shadow-xs"
                >
                  {/* State Section Header */}
                  <div className="bg-[#F3ECE2] border-b border-[#B8863B]/25 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-xs bg-[#1A2744] text-[#FFD9A9] flex items-center justify-center border border-[#B8863B]/40 shadow-xs">
                        <MapPin className="w-4 h-4 text-[#FFD9A9]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#191B21] tracking-tight">
                            {state}
                          </h3>
                          <span className="px-2 py-0.5 text-[9.5px] font-mono bg-[#FAF7F2] text-[#882B16] border border-[#B8863B]/30 rounded-xs uppercase tracking-wider font-semibold">
                            {region}
                          </span>
                        </div>
                        <p className="text-[11px] font-mono text-[#8A726C] mt-0.5">
                          {items.length} Curated Cultural Heritage & Artisan Record{items.length > 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="px-2.5 py-1 bg-[#FAF7F2] border border-[#B8863B]/30 rounded-xs text-[10.5px] font-mono text-[#57423D] flex items-center gap-1.5">
                        <span className="text-[#8A726C]">Explored:</span>
                        <span className="font-bold text-[#191B21]">
                          {stateExploredCount} / {items.length}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Grid of Items for this State */}
                  <div className="p-4 sm:p-6 bg-[#FAF7F2]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                      {items.map((item) => (
                        <CulturalItemCard
                          key={item.id}
                          item={item}
                          isExplored={exploredItemIds.includes(item.id)}
                          onSelect={(selected) => setActiveItem(selected)}
                        />
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          /* Standard Unified Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredItems.map((item) => (
              <CulturalItemCard
                key={item.id}
                item={item}
                isExplored={exploredItemIds.includes(item.id)}
                onSelect={(selected) => setActiveItem(selected)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Item Detail Modal */}
      {activeItem && (
        <CulturalItemDetailModal
          item={activeItem}
          isExplored={exploredItemIds.includes(activeItem.id)}
          onClose={() => setActiveItem(null)}
          onMarkExplored={(itemId, xp) => {
            onExploreItem(itemId, xp);
          }}
          onNavigateToCartography={onNavigateToCartography}
          onNavigateToChronology={onNavigateToChronology}
        />
      )}
    </div>
  );
};
