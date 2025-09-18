const ParallaxBackground = () => {
  return (
    <section className="absoute inset-0 bg-black/40">
        <div className="relative h-screen overflow-y-hidden">
            <div className="absoute inset-0 w-full h-screen -z-50" style={{
                backgroundImage: "url(/assets/sky.jpg)",
                backgroundPosition: "bottom",
                backgroundSize: "cover"
            }}></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </section>
  )
}
export default ParallaxBackground