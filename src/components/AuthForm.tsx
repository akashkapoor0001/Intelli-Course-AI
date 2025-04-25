import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users") || "{}");

      if (authMode === "register") {
        if (users[email]) {
          toast({
            title: "User already exists",
            description: "Please log in instead.",
          });
          setIsLoading(false);
          return;
        }
      
        if (password !== confirmPassword) {
          toast({
            title: "Passwords do not match",
            description: "Please make sure both passwords are the same.",
          });
          setIsLoading(false);
          return;
        }
      
        users[email] = { name, email, password };
        localStorage.setItem("users", JSON.stringify(users));
        toast({
          title: "Account created",
          description: "You can now log in with your credentials.",
        });
        setAuthMode("login");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword(""); // clear confirm password
        setIsLoading(false);
      } else {
        if (users[email] && users[email].password === password) {
          toast({
            title: "Success!",
            description: "Logged in successfully!",
          });
          localStorage.setItem("loggedIn", "true");
          navigate('/dashboard');
        } else {
          toast({
            title: "Login failed",
            description: "Invalid email or password.",
          });
        }
        setIsLoading(false);
      }      
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center px-4 pt-6 bg-background">
    <Card className="w-full max-w-md border shadow-lg animate-scale-in">
      <Tabs value={authMode} onValueChange={(val: "login" | "register") => setAuthMode(val)} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        {/* Login Form */}
        <TabsContent value="login">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className="text-2xl gradient-heading">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to access your personalized course recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="student@university.edu"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </CardFooter>
          </form>
        </TabsContent>

        {/* Register Form */}
        <TabsContent value="register">
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle className="text-2xl gradient-heading">Create Account</CardTitle>
              <CardDescription>
                Register to get started with personalized course recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
  <div className="space-y-2">
    <label htmlFor="reg-name" className="text-sm font-medium">Full Name</label>
    <Input
      id="reg-name"
      type="text"
      placeholder="John Doe"
      required
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="space-y-2">
    <label htmlFor="reg-email" className="text-sm font-medium">Email</label>
    <Input
      id="reg-email"
      type="email"
      placeholder="student@university.edu"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="space-y-2">
    <label htmlFor="reg-password" className="text-sm font-medium">Password</label>
    <Input
      id="reg-password"
      type="password"
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <div className="space-y-2">
    <label htmlFor="reg-confirm-password" className="text-sm font-medium">Confirm Password</label>
    <Input
      id="reg-confirm-password"
      type="password"
      required
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />
  </div>
</CardContent>

            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </CardFooter>
          </form>
        </TabsContent>
      </Tabs>
    </Card>
  </div>
  );
};

export default AuthForm;
