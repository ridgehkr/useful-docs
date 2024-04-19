import { useRouter } from 'next/router'

export default {
  docsRepositoryBase: 'https://github.com/ridgehkr/useful-docs/tree/main/',
  logo: (
    <>
      {/* prettier-ignore */}
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="28" viewBox="0 0 120 28"><defs><linearGradient id="a" x1="0%" x2="100%" y1="0%" y2="100%"><stop offset="0%" stopColor="#794389"/><stop offset="100%" stopColor="#DA5757"/></linearGradient></defs><path fill="url(#a)" d="M12.403 25.3306h-.1138c-.5444.6363-1.1805 1.1715-1.9081 1.6057C9.1926 27.6454 7.9637 28 6.694 28c-1.3556 0-2.5343-.2929-3.536-.8787-1.0017-.5857-1.7785-1.4073-2.3303-2.4648C.2759 23.599 0 22.3585 0 20.935V8.5124h4.2468v12.0658c0 1.1032.315 1.9881.9451 2.655.6301.6668 1.4725 1.0081 2.527 1.0239.7365.0078 1.382-.141 1.9365-.4468.5544-.3057.9881-.7344 1.301-1.286.313-.5515.4695-1.2002.4695-1.946V8.5123h4.2468V22.038c0 .4409.1839.8691.5516 1.2848.3678.4156.859.751 1.4734 1.0061L16.1827 28c-1.147-.4026-2.1047-.9363-2.8733-1.6011-.4106-.3552-.7127-.7113-.9063-1.0683ZM28.9656 28c-1.264 0-2.4366-.2067-3.5181-.62-1.0815-.4133-2.0104-.9683-2.7868-1.665-.7764-.6966-1.3438-1.4689-1.7022-2.3169l3.6305-1.5006c.3321.6165.8876 1.191 1.6663 1.7236.7788.5325 1.7306.7988 2.8557.7988.6233 0 1.2066-.0891 1.7501-.2673.5435-.1782.9829-.4296 1.318-.7542.3352-.3247.5028-.7129.5028-1.1646 0-.5519-.2667-.9956-.8001-1.3312-.5334-.3357-1.2185-.627-2.0554-.8739a1013.636 1013.636 0 0 1-2.6635-.7902c-.9388-.2799-1.8267-.6359-2.6636-1.068-.837-.4322-1.5221-.9974-2.0554-1.6955-.5333-.6982-.8-1.593-.8-2.6848 0-1.1882.3301-2.197.9902-3.0266.6601-.8296 1.5342-1.4601 2.6222-1.8917 1.088-.4316 2.277-.6474 3.5668-.6474 1.6701 0 3.164.3642 4.4815 1.0926 1.3176.7284 2.2726 1.6942 2.8652 2.8975l-3.5942 1.5006c-.3084-.5028-.7763-.949-1.4038-1.3385-.6274-.3896-1.4343-.5844-2.4207-.5844-.835 0-1.5722.1676-2.2114.503-.6392.3353-.9588.83-.9588 1.484 0 .5717.2667 1.0282.8 1.3696.5335.3413 1.2196.6324 2.0585.8731.839.2408 1.7279.491 2.6668.7508.939.2597 1.8278.5916 2.6667.9959.839.4042 1.5251.9395 2.0585 1.6059.5334.6663.8 1.5354.8 2.6072 0 1.2055-.3503 2.2597-1.0511 3.1625-.7008.9028-1.6328 1.6045-2.7962 2.105-1.1634.5005-2.4362.7507-3.8185.7507Zm15.9532-11.346h9.097c0-.9656-.1814-1.8128-.5444-2.5417-.363-.7289-.865-1.2978-1.506-1.7067-.6412-.4089-1.3826-.6133-2.2244-.6133-.967 0-1.8205.2616-2.5603.785-.7399.5233-1.3176 1.2527-1.733 2.1882-.2538.5714-.4301 1.2009-.5289 1.8885Zm.0418 2.9697c.1145.6279.301 1.2077.5597 1.7396.464.9537 1.1102 1.6953 1.9389 2.2247.8286.5295 1.7868.7942 2.8748.7942.8283 0 1.6593-.149 2.4931-.447.8338-.2981 1.5425-.6973 2.1262-1.1976l1.4146 3.4098c-.735.5381-1.6592.9814-2.7725 1.33-1.1133.3484-2.2161.5226-3.3084.5226-1.8516 0-3.4775-.4137-4.8777-1.2412-1.4002-.8275-2.4899-1.9841-3.2689-3.47-.779-1.4857-1.1685-3.2107-1.1685-5.175 0-1.969.3703-3.6955 1.111-5.1797.7407-1.4842 1.7769-2.6402 3.1085-3.468 1.3316-.8277 2.8768-1.2416 4.6356-1.2416 1.6383 0 3.076.372 4.3129 1.1161 1.237.744 2.2026 1.7833 2.8969 3.1177.6943 1.3345 1.0414 2.8884 1.0414 4.6618 0 .4141-.02.8538-.0603 1.3191-.0402.4654-.1005.8602-.181 1.1845H44.9606ZM63.511 27.712V1.1877h15.5428v3.9777h-11.127v7.708h9.495v3.9777h-9.495v10.861H63.511Zm31.8125-2.3815h-.114c-.5443.6363-1.1803 1.1715-1.908 1.6057C92.113 27.6454 90.884 28 89.6144 28c-1.3556 0-2.5343-.2929-3.536-.8787-1.0017-.5857-1.7785-1.4073-2.3303-2.4648-.5519-1.0575-.8278-2.298-.8278-3.7215V8.5124h4.2468v12.0658c0 1.1032.315 1.9881.9451 2.655.6302.6668 1.4725 1.0081 2.527 1.0239.7365.0078 1.382-.141 1.9365-.4468.5544-.3057.9881-.7344 1.301-1.286.313-.5515.4695-1.2002.4695-1.946V8.5123h4.2468V22.038c0 .4409.1839.8691.5516 1.2848.3678.4156.859.751 1.4734 1.0061L99.103 28c-1.147-.4026-2.1047-.9363-2.8732-1.6011-.4107-.3552-.7128-.7113-.9064-1.0683ZM114.0984 28c-1.4443 0-2.7084-.292-3.7923-.8758-1.084-.584-1.929-1.3946-2.5353-2.4322-.6063-1.0375-.9095-2.2345-.9095-3.591V0h4.2468v20.8898c0 .979.3087 1.7808.926 2.4054.6172.6246 1.446.9368 2.4866.9368.6964 0 1.397-.142 2.102-.426.705-.284 1.3188-.6395 1.8414-1.0667l1.513 3.6069c-.8209.4954-1.7507.8949-2.7895 1.1984-1.0388.3036-2.0686.4554-3.0892.4554Z"/></svg>
    </>
  ),
  project: {
    link: 'https://github.com/ridgehkr/useful/',
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href='https://calebpierce.dev/' target='_blank'>
          Caleb Pierce
        </a>
        .
      </span>
    ),
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – useFul',
      }
    }
  },
}
