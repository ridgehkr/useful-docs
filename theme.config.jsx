import { useRouter } from 'next/router'

export default {
  docsRepositoryBase: 'https://github.com/ridgehkr/useful-docs/tree/main/',
  logo: (
    <>
      {/* prettier-ignore */}
      <svg width='94' height='28' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 94 28'><defs><linearGradient x1='0%' y1='0%' x2='100%' y2='100%' id='a'><stop stopColor='#794389' offset='0%' /><stop stopColor='#DA5757' offset='100%' /></linearGradient></defs><path d='M25.3840784 23.3333333c.4541399.8854745 1.1233886 1.5615362 2.0077663 2.0282052.8843777.466669 1.8165455.7 2.7965316.7.4541399 0 .908273-.0717942 1.3624129-.2153847.4541399-.1435904.8604695-.3470072 1.2190009-.6102564.3585315-.2632491.6513279-.58034.8783978-.951282.2270699-.370942.3406032-.7957241.3406032-1.274359 0-.7658158-.2449928-1.340169-.7349859-1.7230769-.489993-.3829079-1.093512-.6820502-1.8105749-.8974359-.717063-.2153857-1.5058205-.4008539-2.366296-.5564103-.8604756-.1555563-1.6492331-.3948701-2.3662961-.7179487-.7170629-.3230785-1.3205819-.771792-1.8105749-1.3461538-.4899931-.5743619-.7349859-1.388029-.7349859-2.4410257 0-.8136793.1673122-1.5196551.5019416-2.1179487.3346294-.5982936.7708361-1.0948698 1.3086334-1.4897436.5377972-.3948737 1.1413162-.6880332 1.8105749-.8794872.6692588-.1914539 1.3504584-.2871794 2.0436193-.2871794 1.3624197 0 2.5395804.2512795 3.5315175.7538461.9919372.5025666 1.7627683 1.2923023 2.3125166 2.3692308l-1.9360604 1.1487179c-.4063357-.7658158-.9142477-1.3461518-1.5237512-1.7410256-.6095035-.3948738-1.4042364-.5923077-2.3842225-.5923077-.3824336 0-.7827877.0598285-1.2010745.1794872-.4182867.1196587-.7947391.2871784-1.1293685.5025641-.3346294.2153857-.6154749.4905966-.8425448.825641-.22707.3350444-.3406032.7179466-.3406032 1.1487179 0 .7418841.2449928 1.2923059.7349859 1.6512821.489993.3589762 1.093512.6401699 1.8105749.8435897.717063.2034199 1.5058205.3769224 2.366296.5205129.8604756.1435904 1.6492331.3769214 2.366296.7.717063.3230785 1.320582.7897405 1.810575 1.4.4899931.6102594.7349859 1.4777721.7349859 2.6025641 0 .8615427-.1613368 1.6093985-.4840151 2.2435897-.3226783.6341912-.7648605 1.1666645-1.3265599 1.5974359-.5616993.4307714-1.2010709.7538451-1.9181339.9692308C31.6941975 27.8923088 30.9412926 28 30.1525233 28c-1.4341259 0-2.7427462-.2752109-3.9259001-.825641-1.183154-.5504301-2.0973955-1.3999943-2.7427522-2.548718l1.9002074-1.2923077Zm29.871056 1.1128205c-.8365735 1.2683825-1.8703238 2.1777751-3.1012819 2.7282052C50.9228944 27.7247891 49.5664706 28 48.0845404 28c-1.2668112 0-2.4140948-.2153825-3.4418851-.6461538-1.0277902-.4307714-1.9121547-1.0350389-2.6531197-1.8128206-.7409651-.7777816-1.3086315-1.6991399-1.7030161-2.7641025-.3943846-1.0649626-.591574-2.2435833-.591574-3.5358975 0-1.2444506.2031648-2.3931571.6095005-3.4461538.4063357-1.0529967.9799774-1.9683722 1.7209425-2.7461539.7409651-.7777816 1.6133787-1.3880319 2.6172668-1.8307692 1.0038882-.4427372 2.1153191-.6641025 3.3343262-.6641025 1.2668113 0 2.3842177.2213653 3.3522527.6641025.968035.4427373 1.7806942 1.0290562 2.4380019 1.7589744.6573078.7299182 1.1532689 1.5615338 1.4878983 2.4948718.3346294.933338.5019416 1.8786277.5019416 2.8358974v1.5076923H41.8461237c0 .4547031.0896315 1.0350392.2688973 1.7410257.1792657.7059864.5079146 1.3940137.9859566 2.0641025.478042.6700888 1.1174136 1.2444421 1.9181339 1.7230769.8007203.4786349 1.8344706.7179488 3.1012819.7179488 1.0994966 0 2.163124-.2632453 3.1909143-.7897436 1.0277903-.5264984 1.8165477-1.2444399 2.366296-2.1538462l1.5775307 1.3282051Zm-1.6492366-6.5692307c0-.7418841-.1493859-1.4358942-.4481622-2.0820513-.2987762-.6461571-.7051058-1.2145275-1.2190009-1.7051282-.5138952-.4906008-1.1233896-.8794858-1.8285015-1.1666667-.7051119-.2871809-1.4520413-.4307692-2.2408106-.4307692-1.1712029 0-2.1451988.2393138-2.922017.7179487-.7768183.4786349-1.3922881 1.0290567-1.846428 1.6512821-.4541399.6222253-.7768134 1.2264928-.9680302 1.8128205-.1912168.5863277-.2868237.9871784-.2868237 1.2025641h11.7597741Zm8.1800093-4.9538462H58.344022v-1.9384615h3.4418851V5.56410256c0-1.07692846.1613367-1.96837253.4840151-2.67435897.3226783-.70598644.7230325-1.27435682 1.2010744-1.70512821.478042-.43077138 1.0098558-.73589653 1.5954572-.91538461C65.6520552.08974269 66.2077707 0 66.7336169 0c1.0038882 0 1.8284982.1435883 2.4738549.43076923l-.4302356 1.86666667c-.478042-.23931744-1.123389-.35897436-1.9360604-.35897436-1.93607 0-2.9040905 1.47178015-2.9040905 4.41538461v4.63076925h3.8721207v1.9384615h-3.8721207v14.6461539h-2.1511782V12.9230769Zm23.4175214 9.9794872c0 .3111127.0119509.688032.035853 1.1307692.0239021.4427373.0418284.8914508.0537794 1.3461539.0119511.4547031.0298774.8794852.0537795 1.274359.0239021.3948737.035853.6999989.035853.9153846h-2.1511782c-.0239021-.6222254-.0418284-1.22051-.0537795-1.7948718-.011951-.5743619-.0418282-.9452983-.0896324-1.1128205h-.1075589c-.4302378.9094062-1.14729 1.6931591-2.1511782 2.351282C79.825478 27.6709435 78.6542927 28 77.3157752 28c-1.2907134 0-2.3483654-.2034168-3.1729879-.6102564-.8246224-.4068397-1.4699694-.939313-1.9360603-1.5974359-.466091-.658123-.782789-1.4179444-.9501037-2.2794872-.1673147-.8615428-.2509708-1.747004-.2509708-2.6564102v-9.8717949h2.1511782v9.7641025c0 .6700889.0597543 1.3222191.1792648 1.9564103.1195105.6341912.3286507 1.2025616.627427 1.7051282.2987762.5025666.7170567.9034173 1.2548539 1.2025641.5377973.2991468 1.2369232.448718 2.0973988.448718.7887692 0 1.5356986-.1376055 2.2408106-.4128206.7051119-.275215 1.3146063-.6940142 1.8285014-1.2564102.5138952-.562396.9202248-1.2683718 1.219001-2.1179487.2987763-.8495769.4481621-1.8487122.4481621-2.9974359v-8.2923077h2.1511782v11.9179487ZM91.4832304.43076923h2.1511782V27.5692308h-2.1511782V.43076923ZM18.060795 22.0904274c-.943708 1.8841599-2.3027931 3.4384724-3.9269838 4.4691254-1.446137.9213387-2.7912186 1.3527949-4.39068097 1.4247042-2.54729192.1078641-4.96913581-1.087629-6.79858622-3.3662569-1.36598965-1.703353-2.3138192-3.8651282-2.71107129-6.1931938-.20908005-1.2269535-.20559538-1.2044818-.21953405-4.5842218L0 10.7170216l.08711669.1123584c.13241736.1707847 3.92373556 5.9504996 3.92373556 5.98196 0 .0314603-.68647949-.0629207-1.52976902-.2067394-.78753484-.1393244-.76314217-.1393244-.7492035-.013483.00696933.0584263.02787734.2966261.05227001.5303315.07666269.817969.33104341 1.9505414.60981681 2.7415444 1.29629629 3.6628831 3.99691358 5.9370167 7.05296694 5.9325224 3.10832341-.0044944 5.99014341-2.1168319 7.45370371-5.4696059.4808841-1.1056064.7840502-2.3370542.9094982-3.6988378.0162618-.1647922.0278773-4.1655005.0348467-12.00212466h1.7249104c-.0101786 3.24672396-.0214628 5.87061276-.0338527 7.87166626.0936584 3.6050374.2271089 6.3664464.4003516 8.284227.1401508 1.5514564.278193 3.5112854.5818745 5.1922015.0935106.5175938.2791783 1.1932464.5570029 2.0269577l-3.0144738-.0001735v-5.9093991Z' fill='url(#a)' fillRule='evenodd'/></svg>
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
