import React from 'react';
import { CulturalItem } from '../../types';
import { getCulturalItemsByState } from '../../data/culturalHeritage';
import { Sparkles, ChevronRight, Palette, UtensilsCrossed, Music, Shirt, Home, User } from 'lucide-react';

interface StateCulturalItemsPanelProps {
  stateName: string;
  exploredItemIds?: string[];
  onSelectItem: (item: CulturalItem) => void;
  onViewAllCulture?: () => void;
}

const categoryIcons = {
  festivals: Sparkles,
  'food-cuisine': UtensilsCrossed,
  'music-instruments': Music,
  'arts-crafts': Palette,
  'clothing-textiles': Shirt,
  architecture: Home,
  artisans: User,
};

const categoryColors = {
  festivals: 'bg-[#FFD9A9]/80 text-[#882B16] border-[#B8863B]/40',
  'food-cuisine': 'bg-[#F3ECE2]/80 text-[#684300] border-[#B8863B]/30',
  'music-instruments': 'bg-[#FAF2EB]/80 text-[#A8422B] border-[#B8863B]/35',
  'arts-crafts': 'bg-[#FAF7F2]/80 text-[#882B16] border-[#B8863B]/30',
  'clothing-textiles': 'bg-[#FFE5D9]/80 text-[#882B16] border-[#B8863B]/35',
  architecture: 'bg-[#F3ECE2]/80 text-[#684300] border-[#B8863B]/30',
  artisans: 'bg-[#FAF2EB]/80 text-[#A8422B] border-[#B8863B]/40',
};

export const StateCulturalItemsPanel: React.FC<StateCulturalItemsPanelProps> = ({
  stateName,
  exploredItemIds = [],
  onSelectItem,
  onViewAllCulture,
}) => {
  const culturalItems = getCulturalItemsByState(stateName);

  if (culturalItems.length === 0) {
    return (
      <div className="p-4 text-center space-y-2 bg-[#F3ECE2]/40 border border-[#B8863B]/20 rounded-xs">
        <Sparkles className="w-6 h-6 text-[#B8863B] mx-auto opacity-60" />
        <p className="text-xs text-[#8A726C] font-mono">
          No cultural heritage items currently catalogued for {stateName}.
        </p>
        <p className="text-[11px] text-[#8A726C]">
          Regional traditions, artisan crafts, and living heritage records are being curated.
        </p>
      </div>
    );
  }

  const exploredCount = culturalItems.filter((item) => exploredItemIds.includes(item.id)).length;

  return (
    <div className="space-y-3">
      {/* State Culture Header */}
      <div className="p-3 bg-[#FAF2EB] border border-[#B8863B]/30 rounded-xs">
        <div className="flex items-center justify-between mb-1">
          <h4 className="label-caps text-[#A8422B] text-[10px] font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B8863B]" />
            {stateName} LIVING CULTURAL HERITAGE
          </h4>
          <span className="text-[10px] font-mono text-[#684300] bg-[#FFD9A9]/50 px-2 py-0.5 rounded-xs">
            {culturalItems.length} RECORDS
          </span>
        </div>
        <p className="text-[11px] text-[#57423D] leading-relaxed">
          Master artisans, regional culinary traditions, classical instruments, handlooms, and vernacular architecture of {stateName}.
        </p>
        <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-[#8A726C]">
          <span>Explored: {exploredCount} / {culturalItems.length}</span>
          {onViewAllCulture && (
            <button
              onClick={onViewAllCulture}
              className="text-[#A8422B] hover:text-[#882B16] font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>View All Culture</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Cultural Items List */}
      <div className="space-y-2.5">
        {culturalItems.map((item) => {
          const isExplored = exploredItemIds.includes(item.id);
          const CategoryIcon = categoryIcons[item.category];
          const colorClass = categoryColors[item.category];

          return (
            <button
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="w-full p-3 bg-[#FAF7F2] hover:bg-[#F3ECE2] border border-[#B8863B]/25 hover:border-[#A8422B]/50 rounded-xs transition-all cursor-pointer group text-left"
            >
              <div className="flex items-start gap-2.5">
                {/* Category Icon Badge */}
                <div className={`w-8 h-8 rounded-xs flex items-center justify-center border shrink-0 ${colorClass}`}>
                  <CategoryIcon className="w-4 h-4" />
                </div>

                {/* Item Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h5 className="font-serif-display text-sm font-bold text-[#191B21] group-hover:text-[#882B16] transition-colors truncate">
                        {item.name}
                      </h5>
                      {item.nativeName && (
                        <p className="text-[10px] text-[#8A726C] font-mono mt-0.5 truncate">
                          {item.nativeName}
                        </p>
                      )}
                    </div>
                    {isExplored && (
                      <span className="shrink-0 w-2 h-2 rounded-full bg-[#2A5235] border border-[#4A7555]" title="Explored" />
                    )}
                  </div>

                  <p className="text-xs text-[#57423D] leading-snug mt-1.5 line-clamp-2">
                    {item.shortDescription}
                  </p>

                  <div className="flex items-center gap-1.5 mt-2">
                    <span className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-xs border ${colorClass}`}>
                      {item.category.replace('-', ' ')}
                    </span>
                    <span className="text-[10px] text-[#8A726C] font-mono">
                      • {item.timePeriodOrOrigin}
                    </span>
                  </div>
                </div>

                {/* Chevron */}
                <ChevronRight className="w-4 h-4 text-[#B8863B] group-hover:text-[#A8422B] shrink-0 mt-1 transition-colors" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
