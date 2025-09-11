
'use client';

import type { ReactNode } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  CalendarDays,
  Bell,
  Settings,
  Heart,
  Stethoscope,
  Moon,
  Sun,
  Languages,
} from 'lucide-react';
import Logo from '@/components/icons/logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { placeholderImages } from '@/lib/placeholder-images';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/schedule', icon: CalendarDays, label: 'Schedule' },
  { href: '/doctors', icon: Stethoscope, label: 'Doctors' },
  { href: '/feedback', icon: Heart, label: 'Feedback' },
  { href: '/notifications', icon: Bell, label: 'Notifications' },
];

export default function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const router = useRouter();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Logo className="h-8 w-8 text-sidebar-primary" />
            <span className="font-headline text-lg font-semibold text-sidebar-primary">AyurSutra</span>
          </div>
          <SidebarTrigger className="hidden md:flex" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  as={Link}
                  href={item.href}
                  isActive={pathname === item.href}
                  tooltip={item.label}
                  data-active={pathname === item.href}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                as={Link}
                href="/settings"
                isActive={pathname === '/settings'}
                tooltip="Settings"
              >
                <Settings />
                <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <div className="flex-1">
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur-sm md:px-6">
          
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-10 w-10" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
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

            <Link href="/notifications">
              <Button variant="ghost" size="icon" className="h-10 w-10" aria-label="View notifications">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full border-2 border-primary" aria-label="Open user menu">
                  <Avatar className="h-9 w-9">
                     <AvatarImage src={placeholderImages[0].imageUrl} alt="Pranav" />
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push('/login')}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
             <SidebarTrigger className="md:hidden" />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </SidebarProvider>
  );
}
