import { MapPin } from "lucide-react";
import { LogoMini } from "./Logo";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-muted/30 to-primary/5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* Logo and brand statement */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <LogoMini className="opacity-90" />
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍎</span>
              <p className="text-lg font-medium text-foreground">Built with passion for iOS</p>
            </div>
          </div>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Based in San Francisco, CA • Available worldwide for remote projects
            </span>
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-border mx-auto mb-6"></div>
          
          {/* Copyright and tagline */}
          <div className="space-y-2">
            <p className="text-sm text-foreground font-medium">
              © 2025 Meet Patel - iOS App Developer. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Transforming ideas into exceptional mobile experiences
            </p>
          </div>

          {/* Additional branding */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Crafted with precision • Delivered with excellence • Powered by innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}