export default function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem('metatrial_theme');var p=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;var m=t||(p?'dark':'light');document.documentElement.classList.toggle('dark',m==='dark');}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
