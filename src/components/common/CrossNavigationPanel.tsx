import React from 'react';
import { CrossNavigationLink } from '../../utils/crossNavigation';
import { MapPin, Sparkles, History, ScrollText, Award, ChevronRight } from 'lucide-react';

interface CrossNavigationPanelProps {
  links: CrossNavigationLink[];
  title: string;
  onNavigate: (link: CrossNavigationLink) => void;
  emptyMessage?: string;
}

export const CrossNavigationPanel: React.FC<CrossNavigationPanelProps> = ({
  links,
  title,
  onNavigate,
  emptyMessage = 'No related content found',
}) => {
  if (links.length === 0) return null;

  const getIcon = (type: CrossNavigationLink['type']) => {
    switch (type) {
      case 'cartography':
        return <MapPin className="w-3.5 h-3.5 text-[#A8422B]" />;
      case 'culture':
        return <Sparkles className="w-3.5 h-3.5 text-[#B8863B]" />;
      case 'chronology':
        return <History className="w-3.5 h-3.5 text-[#1A2744]" />;
      case 'dossier':
        return <ScrollText className="w-3.5 h-3.5 text-[#684300]" />;
      case 'journey':
        return <Award className="w-3.5 h-3.5 text-[#A8422B]" />;
    }
  };

  const getBgColor = (type: CrossNavigationLink['type']) => {
    switch (type) {
      case 'cartography':
        return 'bg-[#FFD7CE]/30 hover:bg-[#FFD7CE]/50 border-[#A8422B]/30';
      case 'culture':
        return 'bg-[#FFD9A9]/30 hover:bg-[#FFD9A9]/50 border-[#B8863B]/30';
      case 'chronology':
        return 'bg-[#CDD9FF]/30 hover:bg-[#CDD9FF]/50 border-[#1A2744]/25';
      case 'dossier':
        return 'bg-[#F3ECE2]/60 hover:bg-[#F3ECE2] border-[#B8863B]/30';
      case 'journey':
        return 'bg-[#FFD7CE]/40 hover:bg-[#FFD7CE]/60 border-[#882B16]/30';
    }
  };

  return (
    <div className="space-y-2">
      <h4 className="label-caps text-[#684300] text-[10px] font-bold flex items-center gap-1.5">
        {title}
      </h4>
      <div className="space-y-1.5">
        {links.map((link) => (
          <button
            key={`${link.type}-${link.id}`}
            onClick={() => onNavigate(link)}
            className={`w-full p-2.5 rounded-xs border transition-all text-left flex items-center justify-between group cursor-pointer ${getBgColor(link.type)}`}
          >
            <div className="flex items-start gap-2 flex-1 min-w-0">
              <div className="mt-0.5 shrink-0">
                {getIcon(link.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-[#191B21] leading-tight group-hover:text-[#882B16] transition-colors">
                  {link.label}
                </div>
                {link.subtitle && (
                  <div className="text-[10px] text-[#8A726C] mt-0.5 font-mono uppercase tracking-wide">
                    {link.subtitle}
                  </div>
                )}
              </div>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#8A726C] group-hover:text-[#A8422B] group-hover:translate-x-0.5 transition-all shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
};
