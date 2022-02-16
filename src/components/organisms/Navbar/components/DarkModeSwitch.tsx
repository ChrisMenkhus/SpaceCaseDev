import { MoonIcon, SunIcon } from '@heroicons/react/outline'

export const DarkModeSwitch = ({
  toggleTheme,
}: {
  toggleTheme: () => void
}) => {
  return (
    <label
      htmlFor="darktoggle"
      className="relative w-28 h-8 text-white bg-[#333] rounded-full transition-all"
    >
      <input
        type="checkbox"
        name="darktoggle"
        id="darktoggle"
        className="peer sr-only"
        onClick={toggleTheme}
      />
      <span className="flex absolute peer-checked:left-20 w-8 h-8 text-dark bg-light rounded-full border-2 border-dark transition-all">
        <div className="block dark:hidden m-auto w-6 h-6 ">
          <SunIcon className="" />
        </div>
        <div className="hidden dark:block m-auto w-6 h-6 ">
          <MoonIcon className="" />
        </div>
      </span>
      <div className="absolute top-2 left-7 peer-checked:left-1 w-20 h-8 text-xs text-center transition-all">
        <span className="hidden dark:block">Lightmode</span>
        <span className="block dark:hidden">Darkmode</span>
      </div>
    </label>
  )
}
