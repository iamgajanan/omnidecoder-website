import type { Config } from 'tailwindcss'
const config: Config = { darkMode: ['class'], content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#151515', paper:'#f6f4ee', gold:'#d9a441', graphite:'#222222' }, boxShadow:{ soft:'0 20px 70px rgba(0,0,0,.08)' }, keyframes:{ float:{'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-8px)'}} }, animation:{float:'float 5s ease-in-out infinite'} } }, plugins: [] }
export default config
