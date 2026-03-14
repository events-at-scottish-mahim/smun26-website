import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from '@/components/Navigation';

const goldDividerStyle = {
  background: "linear-gradient(90deg, #FFD700 0%, #FFFACD 100%)",
  height: 4,
  border: "none",
  margin: "32px 0",
};

const departments = Array.from({ length: 9 }, (_, i) => ({
  name: `Department ${i + 1}`,
  heads: [
    {
      img: "videos/image.png",
      quote: "Insert quote here",
      position: "Head",
      description: "Insert description here",
    },
    {
      img: "videos/image.png",
      quote: "Insert quote here",
      position: "Head",
      description: "Insert description here",
    },
    {
      img: "videos/image.png",
      quote: "Insert quote here",
      position: "Head",
      description: "Insert description here",
    },
  ],
}));

const tabStyle = {
  minWidth: 220,
  minHeight: 320,
  margin: "0 16px",
  borderRadius: 12,
  background: "#232323",
  color: "#FFD700",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  padding: "24px 12px",
};

const dialogPaperStyle = {
  borderRadius: 16,
  background: "#232323",
  color: "#FFD700",
  padding: "32px",
  maxWidth: 600,
};

const OC: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedHead, setSelectedHead] = useState<any>(null);

  const handleTabClick = (head: any) => {
    setSelectedHead(head);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedHead(null);
  };

  return (
    <div className="min-h-screen bg-smun-navy">
      <Navigation />

      <div className="pt-32 pb-12 px-4">
        <h3 className="text-center text-smun-gold mb-16 text-5xl font-bold">
          Organising Committee
        </h3>
        <p className="text-xl text-smun-gold font-serif text-center mb-12">
            Meet the team behing SMUN-26, the Organising Committee.
          </p>
        {departments.map((dept, idx) => (
          <div key={dept.name} className="mb-12">
          <h5 className="text-smun-gold mb-4 text-xl font-semibold">
            {dept.name}
          </h5>
          <div style={goldDividerStyle} />
          <div className="flex justify-center gap-4 flex-wrap">
            {dept.heads.map((head, i) => (
              <div
                key={i}
                className="min-w-[220px] min-h-[320px] mx-4 rounded-xl bg-[#232323] text-smun-gold shadow-lg flex flex-col items-center cursor-pointer p-6"
                onClick={() => handleTabClick(head)}
              >
                <img
                  src={head.img}
                  alt="Head"
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-smun-gold"
                />
                <p className="text-smun-gold font-semibold mb-2 text-center">
                  {head.quote}
                </p>
                <p className="text-smun-cream text-sm text-center">
                  {head.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Dialog open={open} onOpenChange={setOpen}>
        {selectedHead && (
          <DialogContent className="bg-[#232323] text-smun-gold p-8 rounded-xl max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="flex flex-col items-center">
                <img
                  src={selectedHead.img}
                  alt="Head"
                  className="w-45 h-45 rounded-full object-cover mb-4 border-4 border-smun-gold"
                />
                <p className="text-smun-gold font-semibold mb-2 text-center">
                  {selectedHead.quote}
                </p>
                <p className="text-smun-cream text-sm text-center">
                  {selectedHead.position}
                </p>
              </div>
              <div>
                <p className="text-smun-cream text-lg">
                  {selectedHead.description}
                </p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
      </div>
    </div>
  );
};

export default OC;