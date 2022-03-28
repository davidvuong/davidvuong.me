import BannerVideo from './assets/videos/banner-motion-bg-4.mp4';
import { GitHubSvgIcon } from './components/images/github-logo';
import { LinkedInSvgIcon } from './components/images/linkedin-logo';
import { TwitterSvgIcon } from './components/images/twitter-logo';

export const App = () => (
  <main>
    <section className="relative h-screen">
      <div className="block absolute inset-y-0 h-full w-full">
        <div className="opacity-60 bg-black min-w-full min-h-full absolute top-0 left-0"></div>
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={BannerVideo} type="video/mp4"></source>
        </video>
      </div>
      <div className="relative flex flex-1 flex-col h-full">
        <main className="flex items-center h-full px-4">
          <div className="container mx-auto text-center flex-1">
            <h2 className="text-base font-semibold tracking-wider text-slate-200 uppercase">Hey there 👋</h2>
            <h1 className="mt-2 text-4xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-tight md:text-5xl lg:mx-24">
              I'm David. It's nice to meet you.
            </h1>
            <p className="mt-2 max-w-lg mx-auto text-medium text-gray-300 sm:text-lg md:mt-4 md:text-lg lg:max-w-3/4">
              software engineer, defi investor, inventor, degen, blockchain
            </p>
            <div className="mt-8 max-w-sm mx-auto flex space-x-6 items-center content-center justify-center">
              <a href="https://github.com/davidvuong">
                <GitHubSvgIcon className="text-gray-200 fill-current" />
              </a>
              <a href="https://twitter.com/rasputincat_">
                <TwitterSvgIcon className="text-gray-200 fill-current" />
              </a>
              <a href="https://www.linkedin.com/in/-davidvuong/">
                <LinkedInSvgIcon className="text-gray-200 fill-current" />
              </a>
            </div>
          </div>
        </main>
      </div>
    </section>
  </main>
);
