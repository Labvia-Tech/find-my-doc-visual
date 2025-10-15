import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
}

const PhoneFrame = ({ children }: PhoneFrameProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4 md:p-8">
      <div className="relative">
        {/* Phone Frame */}
        <div className="relative w-full max-w-[375px] h-[812px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
          
          {/* Screen */}
          <div className="relative w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-11 bg-background z-20 flex items-center justify-between px-6 pt-2">
              <span className="text-xs font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-3 border border-current rounded-sm relative">
                  <div className="absolute inset-0.5 bg-current rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="h-full overflow-y-auto pb-safe">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;
