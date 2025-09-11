// app/blog/page.js
import { redirect } from 'next/navigation';

export default function BlogPage() {
  // Server-side redirect
  redirect('https://syntax-void.onrender.com');
}
