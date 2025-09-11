
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Logo from '@/components/icons/logo';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="animate-pulse">
        <Logo className="h-24 w-auto text-primary" />
      </div>
      <span className="mt-4 animate-pulse font-headline text-4xl font-bold text-primary">
        AyurSutra
      </span>
    </div>
  );
}


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [mobileError, setMobileError] = useState('');
  
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userError, setUserError] = useState('');
  
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isLoggingIn) {
      const timer = setTimeout(() => {
        router.push('/dashboard');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoggingIn, router]);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'Random@123gmail.com' && password === '12345678') {
      setIsLoggingIn(true);
    } else {
      setError('Invalid email or password');
    }
  };
  
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile === '0123456789') {
      setShowOtpInput(true);
      setMobileError('');
    } else {
      setMobileError('Invalid mobile number');
    }
  };
  
  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '123456') {
      setIsLoggingIn(true);
    } else {
      setMobileError('Invalid OTP');
    }
  };

  const handleUserEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (userEmail === 'Random@123gmail.com' && userPassword === '12345678') {
      setIsLoggingIn(true);
    } else {
      setUserError('Invalid user email or password');
    }
  };
  
  if (isLoggingIn) {
    return <SplashScreen />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{backgroundImage: 'url(https://picsum.photos/seed/ayurveda-herbs/1920/1080)'}}
        data-ai-hint="ayurveda herbs background"
      ></div>
      <Card className="relative z-10 mx-auto w-full max-w-md border-2 border-primary/20 bg-card/80 shadow-2xl backdrop-blur-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Logo className="h-10 w-auto text-primary" />
            <span className="font-headline text-3xl font-bold text-primary">AyurSutra</span>
          </div>
          <CardTitle className="font-headline text-2xl">Login</CardTitle>
          <CardDescription>Select your role to login.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="admin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="admin">Admin</TabsTrigger>
              <TabsTrigger value="user">User</TabsTrigger>
            </TabsList>
            <TabsContent value="admin">
              <form onSubmit={handleAdminLogin} className="mt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Email</Label>
                    <Input 
                      id="admin-email" 
                      type="email" 
                      placeholder="m@example.com" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Label htmlFor="admin-password">Password</Label>
                      <Link href="#" className="ml-auto inline-block text-sm text-primary hover:underline">
                        Forgot your password?
                      </Link>
                    </div>
                    <Input 
                      id="admin-password" 
                      type="password" 
                      required 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && <p className="text-sm font-medium text-destructive">{error}</p>}
                  <Button type="submit" className="w-full">
                    Login as Admin
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="user">
               <form onSubmit={handleUserEmailLogin} className="mt-4 space-y-4">
                 <div className="space-y-2">
                   <Label htmlFor="user-email">Email</Label>
                   <Input
                     id="user-email"
                     type="email"
                     placeholder="m@example.com"
                     required
                     value={userEmail}
                     onChange={(e) => setUserEmail(e.target.value)}
                   />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="user-password">Password</Label>
                   <Input
                     id="user-password"
                     type="password"
                     required
                     value={userPassword}
                     onChange={(e) => setUserPassword(e.target.value)}
                   />
                 </div>
                 {userError && <p className="text-sm font-medium text-destructive">{userError}</p>}
                 <Button type="submit" className="w-full">
                   Login with Email
                 </Button>
               </form>
               
               <div className="my-4 flex items-center">
                  <Separator className="flex-1" />
                  <span className="mx-4 text-xs text-muted-foreground">OR</span>
                  <Separator className="flex-1" />
                </div>

              {!showOtpInput ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input 
                      id="mobile" 
                      type="tel" 
                      placeholder="Enter your mobile number" 
                      required 
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      pattern="[0-9]{10}"
                      title="Please enter a 10-digit mobile number"
                    />
                  </div>
                  {mobileError && <p className="text-sm font-medium text-destructive">{mobileError}</p>}
                  <Button type="submit" className="w-full">
                    Send OTP
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-4 text-center">
                  <div className="space-y-2">
                    <Label htmlFor="otp">Enter OTP</Label>
                    <div className="flex justify-center">
                      <InputOTP
                        maxLength={6}
                        value={otp}
                        onChange={(value) => setOtp(value)}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Sent to {mobile}
                  </div>
                  {mobileError && <p className="text-sm font-medium text-destructive">{mobileError}</p>}
                  <Button type="submit" className="w-full">
                    Verify OTP
                  </Button>
                  <Button variant="link" size="sm" onClick={() => setShowOtpInput(false)}>
                    Back to login
                  </Button>
                </form>
              )}
            </TabsContent>
          </Tabs>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="#" className="text-primary hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
