
'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Sun,
  Moon,
  Languages,
} from 'lucide-react';
import Logo from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function WebsiteHeader() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-auto text-primary" />
            <span className="font-headline text-3xl font-bold text-primary">
              AyurSutra
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-3 md:flex">
              <a href="#" className="hover:text-primary">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter size={16} />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram size={16} />
              </a>
              <a href="#" className="hovertext-primary">
                <Youtube size={16} />
              </a>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 text-white hover:bg-white/10 hover:text-white"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 text-white hover:bg-white/10 hover:text-white"
                >
                  <Languages className="h-5 w-5" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>हिन्दी</DropdownMenuItem>
                <DropdownMenuItem>मराठी</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/login">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
