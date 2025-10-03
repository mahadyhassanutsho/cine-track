import Container from "./Container";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <main className="min-h-screen py-6">{children}</main>
    </Container>
  );
}
