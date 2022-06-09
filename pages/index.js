import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Use next.js Image</h1>
      <Image width="1920" height="1214" src="/lion-g787becdf8_1920.jpg" alt="lion" />
      <h1>Use DOM img</h1>
      <img width="1920" height="1214" src="/lion-g787becdf8_1920.jpg" alt="lion" />
    </div>
  );
}
