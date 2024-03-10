export function Page() {
  return (
    <>
      <div className="w-[100vw] h-[100vh]  flex justify-center items-center flex-col gap-4 flex-wrap">
        <div className="text-3xl flex justify-center items-center gap-4 font-bold  flex-wrap">
          <span className="flex items-center justify-center gap-2">
            <span className="w-8">
              <img
                className="animate-spin w-full"
                src="https://img.icons8.com/officel/30/react.png"
                alt="react"
              />
            </span>
            <span>React</span>
          </span>
          <span>+</span>
          <span className="flex items-center justify-center gap-2">
            <span className="w-8">
              <img
                className="w-full"
                src="https://img.icons8.com/fluency/48/tailwind_css.png"
                alt="tailwind_css"
              />
            </span>
            <span>TailwindCSS</span>
          </span>
          <span>+</span>
          <span className="flex items-center justify-center gap-2">
            <span className="w-8">
              <img
                className="w-full"
                src="https://daisyui.com/images/daisyui-logo/daisyui-logomark-1024-1024.png"
                alt="DaisyUI"
              />
            </span>
            <span>DaisyUI</span>
          </span>
        </div>
        <div className=" flex justify-center items-center gap-4 text-2xl flex-wrap">
          <span>Powered by - Vite</span>
          <span className="w-6">
            <img
              className="w-full"
              src="https://vitejs.dev/logo.svg"
              alt="vite"
            />
          </span>
        </div>
      </div>
    </>
  );
}
