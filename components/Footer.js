import NextLink from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div class="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
        <div class="flow-root ...">
          <div class="my-4 ...">
            <p>Hecho con ♥ Designed and Developer @areyesdev</p>
          </div>
        </div>
        <div class="flow-root ...">
          <div class="my-4 ...">
            <button className="bg-blue-500 dark:bg-blue-500 rounded p-1 h-10 w-30">
              <NextLink href="/cv.pdf">
                <a className="p-2 md:p-4 text-gray-900 dark:text-gray-100">
                  Curriculum
                </a>
              </NextLink>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
