export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient sombre avec couleurs du logo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#003662] to-[#004a7a]"></div>
      
      {/* Cercles animés avec couleurs de la palette du logo */}
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#003662]/20 rounded-full blur-[100px] animate-float1"
      ></div>
      
      <div 
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#003662]/15 rounded-full blur-[100px] animate-float2"
      ></div>
      
      <div 
        className="absolute bottom-0 left-1/2 w-[700px] h-[700px] bg-[#f4ca3a]/8 rounded-full blur-[120px] animate-float3"
      ></div>
      
      <div 
        className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#9fb620]/10 rounded-full blur-[80px] animate-float4"
      ></div>
      
      {/* Overlay pour assombrir et garder le contenu lisible */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}
