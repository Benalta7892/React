import { useEffect } from "react";

export default function HugeContent() {
  useEffect(() => {
    window.addEventListener("scroll", handleGlobalScroll);

    function handleGlobalScroll() {
      console.log("Scrolling !");
    }

    return () => {
      console.log("Nettoyage de l'écouteur");
      window.removeEventListener("scroll", handleGlobalScroll);
    };
  }, []);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor corporis provident ab itaque inventore neque,
        corrupti illum atque animi est, sunt nam quisquam cumque maxime odio quos quam, dolore ratione. Perspiciatis
        ullam veritatis ex. Nobis aperiam atque rerum suscipit similique dolor aliquam autem repudiandae fugit
        molestias, voluptatem voluptatum et alias, assumenda placeat quod, cumque perspiciatis maiores distinctio ut
        adipisci sint deserunt? Illo minima ipsum consectetur esse atque, tempore pariatur non, animi alias delectus
        inventore nisi cum quis assumenda ratione optio molestiae quod officia eveniet magni. Nesciunt, illo est.
        Molestias repellendus eaque laboriosam ipsum sapiente aliquam nisi enim, culpa asperiores ab rem praesentium
        nulla quod optio veritatis ducimus illo, mollitia velit at voluptates rerum sit, quae tempora eos. Deserunt
        dolore vel a commodi soluta fugit cupiditate beatae laboriosam. In magni sit sint, aspernatur omnis iusto
        quibusdam, nesciunt ab iste numquam reiciendis cum, asperiores quas laudantium magnam dolor eum eaque! Excepturi
        distinctio aspernatur perspiciatis explicabo pariatur nulla voluptatem eum amet vero consequuntur quidem at sint
        nemo, commodi similique magnam obcaecati ad dicta? Laboriosam dolores voluptatibus quod, deserunt itaque dolore
        voluptas facilis, perferendis placeat a, odit maxime voluptate aperiam iusto? Itaque et alias maiores sed.
        Mollitia animi saepe incidunt temporibus aliquid? Fuga quaerat unde, ratione quod rem cum sunt cumque eaque
        autem cupiditate. Quidem veritatis maxime ut, eum voluptatem eaque esse labore reiciendis qui laborum ratione
        iste expedita quisquam quia deserunt modi numquam eius facere in accusamus fuga cum, animi corporis! Consectetur
        error hic corrupti amet temporibus. Natus nisi corporis quasi et consequuntur, delectus totam laboriosam numquam
        architecto, nostrum harum! Facilis iste ducimus, distinctio, aliquam quis tenetur hic itaque fuga blanditiis
        quod totam similique placeat. Rem aut ea, labore accusantium aliquam iusto molestias vitae blanditiis?
        Praesentium ab quidem aspernatur quos recusandae magni doloribus veniam, unde id maxime, error dicta quia iste
        labore tempora eaque nihil explicabo exercitationem ratione ut. Debitis ratione vitae enim amet aliquid libero
        beatae dignissimos incidunt. Distinctio a suscipit qui ab. Quas ut sunt sit libero nemo minima perspiciatis,
        voluptas iusto asperiores animi magnam corrupti nisi facere iure distinctio cum deserunt? Qui, dolore rem.
        Laborum natus expedita deserunt illum saepe ratione, vero perspiciatis itaque esse! Natus in neque quidem
        laboriosam, quaerat ducimus error? Omnis, amet nihil facilis exercitationem laboriosam voluptas maiores numquam.
        Quos veritatis at, nostrum facilis quia commodi quo modi possimus architecto expedita labore natus nihil
        reiciendis facere adipisci, explicabo corporis ea eum quis. Velit, cumque mollitia? Ducimus recusandae, aliquam
        architecto doloribus error perferendis quod obcaecati possimus ad nostrum voluptatibus modi reiciendis et
        facere, dignissimos nulla accusamus odit inventore optio laboriosam? Sit id aliquam nihil fugiat, temporibus
        veniam quis pariatur. Amet magnam natus cupiditate laborum! Atque autem in minus, itaque assumenda odio maiores?
        At expedita dolor assumenda, corporis cupiditate odit fuga quidem commodi veritatis officiis accusantium vitae
        consectetur ad odio cumque pariatur iure sunt quis culpa, ut omnis. Ducimus minima consequatur quaerat assumenda
        maiores aspernatur sunt, fuga rem et nam laudantium laborum mollitia at explicabo consectetur nostrum sapiente
        non libero. Atque minus, architecto illum, enim quam dolorum voluptates dolores velit quisquam suscipit nostrum
        labore corporis fugit sed. Quae possimus neque eligendi quia tempore cum suscipit. Assumenda explicabo adipisci
        laudantium veniam excepturi enim temporibus! Consequatur hic tempore facilis dolorum. Deleniti dolore
        consectetur distinctio nesciunt! Sunt rerum minus, facere similique enim magnam magni suscipit? Sequi explicabo
        deserunt, aliquam a molestiae ratione enim pariatur unde, soluta minima, commodi maxime blanditiis est dolores
        excepturi quam doloremque qui odio neque. Distinctio natus, facere impedit ea fuga asperiores obcaecati
        voluptatem non ullam voluptate minus eum illum vitae cupiditate amet sit! Qui adipisci voluptatem ut rerum odit
        illo atque libero tempore consequuntur officia voluptatum fuga ipsam, blanditiis cumque ducimus numquam
        provident eius porro dolores repellat at, nihil sint illum. Mollitia veniam explicabo repellat ducimus officiis,
        odio voluptates aspernatur impedit laudantium, eum aliquid voluptatibus tenetur! Explicabo blanditiis molestiae
        dolor sed architecto excepturi ea corrupti illo cum modi, alias inventore sunt? Maiores laboriosam quae expedita
        ea dolorem mollitia nihil unde quo, optio sit voluptatum ut ab obcaecati molestiae quos facilis quis? Nesciunt
        iste, nemo doloribus soluta autem cum! Beatae laboriosam vitae inventore dolorum minima obcaecati sequi. At
        illum non dignissimos vitae amet consectetur numquam explicabo libero praesentium alias error repudiandae,
        laboriosam soluta itaque qui. Officiis doloribus ducimus excepturi qui, vero natus quisquam laudantium
        exercitationem quidem, aliquam deleniti, enim dolorem esse molestiae quo vitae fugit porro distinctio et! Quasi
        placeat libero quod assumenda voluptatum ducimus accusamus ullam! Repudiandae officiis repellendus velit dolor
        et aut corporis magnam minima, saepe numquam quibusdam nisi fugiat ab. Ipsum quidem fugit accusantium doloribus
        atque beatae magnam repellat excepturi cum, accusamus eaque illum corporis natus eos at officia dolor vero quasi
        veritatis. Autem beatae, repellat dignissimos quam commodi inventore minima id iste, voluptatem, accusamus
        dolorum. Quaerat quo explicabo dolorem quam voluptatem, quos eius odio quidem earum doloremque perferendis
        ipsam, quae adipisci repudiandae nisi architecto. Corporis, cum hic? Enim vitae ex quam libero ducimus
        distinctio voluptatum praesentium? Alias odit quae asperiores, sed amet, autem doloremque error impedit
        provident accusamus illum hic possimus est facilis. Qui magni exercitationem atque? Veniam nostrum impedit animi
        deserunt saepe aut aliquid vel doloribus. Error numquam, sunt vitae ab illo at corrupti quaerat qui earum sequi
        exercitationem debitis aliquam repudiandae pariatur dolor ipsum modi suscipit fugiat perspiciatis dolore
        delectus incidunt! Quos eligendi, dicta quaerat velit maxime odit alias illo inventore consequuntur voluptates
        nulla incidunt possimus suscipit repudiandae similique est ad quasi, reiciendis officiis adipisci ullam sint
        vero cum veniam. Iure perspiciatis ab soluta quisquam aut, deserunt molestiae? Maxime alias odio quisquam beatae
        doloribus magnam delectus dolorum corrupti voluptatem porro? Numquam laboriosam, aperiam mollitia dolorem
        cupiditate animi maxime dicta sapiente est voluptas voluptates ratione neque, soluta a, placeat eligendi
        accusantium architecto? Minima, consectetur similique cumque vitae mollitia labore veritatis quisquam sint quasi
        possimus fugiat earum ducimus deleniti, maxime aut unde, architecto perspiciatis odit nihil dolores suscipit
        ullam quos animi. Necessitatibus in molestiae magni aut fuga illum tenetur sunt, veniam hic quos iure ea alias
        dolorem minima tempora voluptatum repudiandae, incidunt earum provident mollitia quae officia maxime at quaerat.
        Rem rerum mollitia dolor quo non, sequi aliquam maxime ea velit earum incidunt veritatis aliquid facilis id!
        Animi beatae saepe adipisci placeat aperiam porro odio! Quaerat nostrum aut, atque eaque, deleniti doloremque
        sunt delectus ipsa odio consectetur totam, corporis error minima nam iure quia adipisci est fuga maxime
        similique voluptatem. Cupiditate vel minus nobis, labore magnam odit architecto ut rerum unde delectus beatae,
        aliquid facere asperiores! In nesciunt eligendi magnam odit voluptas vel consequatur aspernatur soluta ipsum
        laboriosam ab quos inventore unde a esse saepe perferendis iusto molestias ut amet dolores, aut adipisci!
        Inventore iure sunt non sapiente quos veritatis reiciendis assumenda vero praesentium laborum delectus dicta,
        enim omnis ipsum. Natus facere autem, labore cum obcaecati aspernatur quidem similique beatae expedita nostrum
        esse nisi dicta iure provident quis magnam qui. Repellendus autem rerum eius eum asperiores quibusdam
        dignissimos nesciunt doloremque pariatur sit! Maxime, repudiandae! Voluptatibus ipsa non maxime suscipit
        accusamus id pariatur corrupti. Error minus alias porro numquam et distinctio voluptas quae corporis mollitia
        illo fugit natus unde repellendus praesentium perferendis impedit cum necessitatibus fugiat doloribus enim
        possimus, neque architecto quidem. Quos enim nobis, doloribus rerum sed voluptas blanditiis necessitatibus
        aspernatur fuga ipsa itaque at temporibus eaque quas, repellat quidem dolores est iure hic neque ullam facilis
        consequatur. Porro temporibus quasi aliquid debitis atque labore! Vel unde esse, temporibus eius doloremque
        nulla! Aspernatur earum, sed ratione fugiat cumque veniam tenetur deleniti voluptates doloremque atque minima.
        Porro tenetur magni obcaecati ipsum suscipit tempora saepe eius repellat nobis quisquam itaque aspernatur, in
        expedita rem laudantium placeat nam cumque voluptatum, quas atque accusantium voluptas repellendus aliquid!
        Saepe voluptatum, optio numquam eveniet praesentium nesciunt doloremque! Rem consequuntur perspiciatis obcaecati
        ipsam fugiat cum soluta sit debitis libero neque quisquam, fugit repellat expedita totam magnam optio ab omnis
        possimus nemo odit illum non sint ad. Quae officia quo impedit totam suscipit cumque deserunt mollitia soluta
        autem modi, voluptatum nostrum expedita quos quasi in ratione velit nobis? Ducimus perspiciatis qui nobis
        voluptatibus commodi totam non aut eos veritatis molestias aperiam fuga quia alias quasi, aspernatur quae soluta
        sed reiciendis repudiandae quibusdam perferendis earum illo. Unde libero labore doloremque. Unde quasi
        voluptatum officiis dolorem deleniti nihil id labore placeat, ratione vel ea velit culpa maiores incidunt sint
        neque omnis a porro quaerat asperiores autem? Eveniet dignissimos reiciendis excepturi aut, consectetur nulla
        tempora voluptas illo dicta deleniti? Eligendi est, quidem, recusandae eveniet nulla adipisci nostrum nobis iure
        tenetur, quaerat voluptas aut sed magni quod? Ut velit sint necessitatibus sunt modi error rem ab qui adipisci!
        Tempora velit cum illo eaque inventore atque dicta recusandae amet repellat est repudiandae obcaecati minima
        laborum animi tenetur modi, ad corrupti voluptas repellendus, autem aspernatur maiores temporibus ipsum. Quo
        quas officia quisquam consectetur animi, accusantium delectus! Quia possimus mollitia unde doloremque magnam.
        Repellendus voluptas iure officia, sunt quam fugiat nobis eaque consequatur aperiam debitis quos ex modi
        consequuntur. Vero laboriosam ea libero vitae sapiente deserunt, ipsum quibusdam dolorem sunt excepturi expedita
        voluptate perferendis aut quaerat eius laudantium eaque dolores ut consequatur pariatur nesciunt cumque
        voluptates? Consectetur adipisci molestias perspiciatis, aut consequuntur nihil odit dolores expedita distinctio
        alias, accusantium pariatur illum laudantium quis dicta soluta. A quas ducimus ad laudantium aspernatur quo vero
        commodi repellendus ea explicabo deleniti, id ipsa pariatur maiores, eos ipsam consectetur odio eius at. Dolore
        tempore molestias mollitia cum inventore, nam libero soluta eos error aliquam illum illo iste! Dignissimos,
        excepturi ullam. Ullam, tempore optio? Quibusdam vitae ullam omnis velit amet officia totam non eius minus
        aperiam! Explicabo, reiciendis sed illo aut incidunt id veniam sit architecto labore! Voluptatibus eum earum
        cupiditate cumque ad minus possimus vitae dolor iste architecto minima inventore animi impedit, perspiciatis
        incidunt veniam similique a illo ut laborum blanditiis assumenda natus? Quo debitis officiis exercitationem a!
        Asperiores, sit? Nam, quam eos quas soluta harum possimus explicabo alias ipsam, autem nisi quis placeat labore
        impedit quia quidem sed perferendis cupiditate laudantium. Adipisci, earum. Consectetur numquam totam quas
        repellendus voluptas ea esse deleniti non dolor, tempore ipsa rerum vitae voluptatibus dolorum eligendi porro id
        molestias sed. Blanditiis rem aut molestias qui odio eius quae, ullam obcaecati earum eveniet quibusdam cum
        quisquam, tenetur nulla officiis fuga ipsum perferendis vitae aperiam ab! Vel odit molestiae error aut! Nulla
        maiores cum tempora iusto nemo beatae iste possimus nam molestiae neque modi dolorum perspiciatis reprehenderit,
        fugit sapiente animi soluta unde! Aliquid, quod nemo? Ab possimus explicabo sequi accusamus temporibus tenetur
        dolore repellat officia sapiente ex accusantium quod rem earum, quos recusandae rerum excepturi nam iusto
        debitis! Voluptates obcaecati error soluta dicta ipsum incidunt earum fugiat expedita mollitia eligendi qui
        aspernatur enim fugit saepe nihil sint, dolorem provident architecto? Ipsum labore culpa soluta dolorem sit quis
        harum sapiente pariatur, neque cupiditate atque. Deserunt aliquid ratione magnam, at et ipsam non voluptates,
        corrupti, natus cupiditate ex. Quis ad, recusandae debitis blanditiis aut sed eius. Qui rerum voluptatibus sunt
        sit praesentium officiis perferendis itaque minima eaque eos, nemo dolores beatae explicabo ratione delectus
        dolorum reprehenderit illum. Eligendi pariatur nesciunt voluptas nam incidunt ducimus eveniet sit illum
        quibusdam, aut modi facilis quod provident impedit porro. Sapiente iusto sed excepturi dolorum suscipit. Aliquid
        ipsum vitae consequatur nihil quod et, laudantium voluptatum. Provident totam est quos, alias corrupti quibusdam
        saepe obcaecati. Quasi, recusandae. Similique mollitia, eveniet ut enim in quibusdam a at unde, non possimus
        quae velit fugit ipsam quidem accusantium odio, ipsum incidunt sed? Ex ad, sit ut amet ullam consequatur ab sunt
        placeat fugit dolorem fugiat esse possimus consectetur minima a qui nisi? Aliquid, amet numquam quaerat modi
        voluptatibus rem ut necessitatibus ipsa voluptatum ratione unde ipsum doloribus sunt repudiandae, quia eius
        veniam consectetur? Excepturi sapiente cupiditate cum eligendi, recusandae aliquam modi corporis in labore porro
        laudantium enim similique. Deserunt dignissimos beatae nihil! Iure dolorum, quis id dolore corporis, consectetur
        eligendi et adipisci expedita vero, vitae ipsum illum. A error magni voluptas dolorum, labore repellat odit est
        culpa eos laudantium harum, reprehenderit repellendus itaque delectus debitis explicabo voluptate ea rerum,
        officia laborum eveniet nostrum provident. Unde corporis perferendis dignissimos adipisci a sed numquam libero
        expedita sit, similique quisquam, cumque ut, rerum et.
      </p>
    </div>
  );
}
