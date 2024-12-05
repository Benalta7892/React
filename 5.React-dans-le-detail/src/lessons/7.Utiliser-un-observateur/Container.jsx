import "./Container.css";
import { useEffect, useRef } from "react";

export default function Container() {
  const newsletterRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      observer.observe(newsletterRef.current);
      console.log(entries);
    });

    return () => {
      observer.unobserve(newsletterRef.current);
    };
  }, []);

  return (
    <div className="container">
      <h1>Utiliser un observateur</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est atque optio in a, possimus iste aliquid
        quae ad nemo nisi eligendi iure omnis rerum dolor inventore voluptatibus, nobis eveniet doloremque molestiae qui
        ea. Tenetur nostrum eum sapiente laboriosam quia, qui odio accusamus minima ea magnam! Modi ex suscipit quis,
        maiores aperiam temporibus ipsam magnam dicta consequuntur dolores? Voluptatibus, architecto ab! Ullam
        laudantium odit alias, ut non at, exercitationem illo corrupti voluptatum nisi ipsa sunt minus ab dignissimos?
        Sit doloremque dolorem esse commodi, velit iusto doloribus? Alias ut rem excepturi eius iusto ab at libero cum
        voluptatum unde magnam suscipit reiciendis, ducimus accusamus quod quidem consectetur autem enim placeat
        temporibus totam. Ratione, quae nihil fuga aperiam odio ullam, nemo ex libero accusamus possimus, vel sequi
        quaerat dignissimos facilis omnis accusantium maxime cupiditate? Necessitatibus amet culpa dignissimos aliquid,
        placeat commodi quas? Neque inventore molestiae temporibus aut ipsam, vitae ullam sequi ipsa suscipit itaque cum
        recusandae odio nesciunt quas! Iure ab nobis repudiandae dolorem necessitatibus eaque soluta ut, porro veritatis
        quisquam reprehenderit iste odit explicabo quos aliquid omnis error, nemo quaerat deleniti quam non minima,
        illum expedita? Neque veniam dolorem sapiente ut quasi soluta laudantium nulla molestias reiciendis eligendi
        dicta voluptate officia libero fuga, atque ducimus fugit dolores pariatur, enim cum placeat. Vel deleniti fugit
        aliquid corporis eveniet fuga similique impedit quas magni consectetur? Delectus nesciunt, totam porro quis modi
        reiciendis atque, quos optio temporibus nam molestiae tenetur inventore ad provident cumque autem eaque. Minus
        ad dolor voluptatum officia ex quasi blanditiis voluptates. Quis quod dicta ad quibusdam minus iusto, tempore
        accusantium modi in maxime. Dolore odit id mollitia omnis dolorum hic labore dolores inventore vero, consequatur
        cum alias! Consequuntur cumque quidem, quos placeat dicta minima necessitatibus at praesentium accusantium
        aspernatur quis veniam pariatur ad harum doloribus suscipit. Fugiat, id voluptatem repellendus, hic unde
        sapiente ipsa aperiam quia neque maiores consectetur sint molestiae illum natus in. Deserunt, delectus commodi
        perferendis repellat vitae officia, aliquid, doloribus iusto corrupti mollitia debitis nostrum harum pariatur
        esse ipsa ratione blanditiis! Odio eum vel tenetur vero quibusdam quod consequuntur aperiam, unde suscipit in
        reiciendis. Sapiente laborum consequuntur soluta voluptatem fugit maxime voluptates? Modi at quos unde
        doloremque. Nobis cupiditate ut rerum dolorem modi vitae temporibus accusamus ullam quo. Inventore recusandae
        temporibus quibusdam, facilis voluptate expedita aliquid consequuntur accusantium natus accusamus neque optio
        sed ratione vitae placeat vel nostrum corporis cupiditate mollitia ipsum excepturi sequi animi numquam culpa?
        Expedita neque natus accusamus eum perferendis, est obcaecati illum odit officiis, a, nemo vel quae officia
        mollitia. Culpa, error iure consectetur cum corrupti repudiandae totam sed quia blanditiis amet suscipit
        sapiente quis laborum. Modi at animi quos tempore molestias ut veritatis reprehenderit assumenda quas nostrum.
        Provident, magni quae. Incidunt non velit atque eius quae eos facilis. Odio provident tenetur saepe dolorem,
        doloremque nemo molestias autem voluptates ipsam aut dignissimos accusamus nam natus nesciunt at repudiandae
        quaerat voluptatibus minus! Pariatur architecto totam harum culpa similique in autem, libero ex recusandae magni
        voluptate tempora quas consequuntur distinctio nemo quod consectetur ducimus est? Molestiae, beatae cumque!
        Fuga, dolorum doloremque. Fugit, mollitia, exercitationem officiis ducimus id consectetur vero ut aut debitis
        nesciunt ipsam nobis repudiandae eius nihil dignissimos eligendi at perspiciatis voluptates odit. Magni
        consequuntur qui adipisci? Dolorem neque ullam est quidem incidunt veniam tenetur explicabo! Totam accusamus
        ipsam praesentium maxime consequuntur, quibusdam placeat exercitationem sapiente tempora dicta provident? Iusto
        eius harum aliquid nam, exercitationem atque, magni maiores architecto eveniet possimus molestiae! Expedita
        voluptatem distinctio quisquam necessitatibus veniam ipsum voluptatibus consectetur ipsam a laudantium
        blanditiis, earum perferendis doloremque assumenda ab accusantium illum nobis nemo dignissimos neque! Modi, fuga
        facilis dicta asperiores quae hic, ratione praesentium laboriosam animi repellat dolores. Quasi officia,
        laudantium recusandae consequatur inventore sed autem nesciunt earum numquam, ducimus eligendi, asperiores
        obcaecati odio tempore ab! Alias laborum recusandae ut voluptatibus atque beatae nam facilis nobis quam,
        possimus error? Assumenda velit voluptas consectetur, praesentium doloribus iusto aliquid quo sequi culpa facere
        amet molestias odio est dolorem quisquam aut aspernatur, officiis veritatis quas officia expedita. Nam,
        inventore doloribus atque, dignissimos vitae libero repellendus delectus eos dicta ut ipsa aspernatur beatae
        illum tempora? Minima, quam illo quae, doloribus quidem porro hic nostrum distinctio dolorem veritatis ipsum
        itaque rem aliquam, corporis nesciunt cum. Repellendus, facere deleniti. Pariatur itaque cum optio incidunt
        aliquid dolore earum necessitatibus eveniet cumque. Dolorum officiis tempora sed consequuntur soluta eius nihil
        corrupti, impedit autem iusto vero repudiandae, ea natus perspiciatis, quos laudantium voluptates adipisci est
        beatae velit iste excepturi in libero! Cupiditate beatae doloremque unde animi aspernatur itaque ratione quam
        possimus iste vel nulla debitis consequuntur maxime nam minima, delectus dolor at qui corrupti asperiores quo
        nihil voluptatem, officiis sequi. Cupiditate quae accusamus, aut facere nisi soluta, earum excepturi deserunt
        blanditiis obcaecati aliquam molestias. Ducimus, nihil. A dolorem at adipisci molestiae. Accusamus, rem
        repellat. Quas illo, minus expedita ab quae repellat laboriosam aliquid veritatis doloribus itaque perferendis
        provident facere temporibus nihil necessitatibus libero, quam exercitationem consequatur obcaecati hic natus
        tenetur? Minus eligendi voluptates dolor cumque accusamus rem voluptatem, dolores, cupiditate dignissimos hic
        sint aliquid, blanditiis culpa? Veniam expedita ducimus odit voluptate, similique provident! Cupiditate optio
        harum vero numquam velit et molestias reprehenderit laudantium nemo illum, voluptatem sint quam saepe in minima
        dolores qui dignissimos quas perspiciatis autem? Fugiat nam, commodi, voluptatem recusandae aperiam odio
        aspernatur, culpa suscipit id architecto consequuntur reprehenderit quas asperiores saepe. Sapiente
        exercitationem odio, architecto delectus, obcaecati, soluta neque repudiandae ducimus temporibus dolorem non
        ipsa alias quisquam eum dolores nesciunt. Impedit qui nemo magnam similique sed eius maxime eum, corporis
        eveniet voluptas animi suscipit obcaecati doloribus deserunt commodi ducimus deleniti ipsam dicta quod sunt
        saepe velit tempore dolor laboriosam. Magni veniam, iure incidunt dolor quia reprehenderit voluptates vitae
        architecto totam itaque, laborum ut, ad impedit? Quisquam possimus velit consequatur dolores, quam est
        voluptatum aperiam! Saepe omnis voluptates illum molestias debitis quibusdam error eius ab nulla, et aspernatur,
        aut deleniti temporibus quis provident tempore odio recusandae, aperiam architecto. Id consectetur corporis quos
        ipsa? Ipsum cumque animi tempore beatae vitae amet placeat magnam non, dolorem sint eligendi similique, corporis
        quibusdam optio repellat eos voluptas molestiae corrupti magni qui dicta. Saepe nam fugit perferendis doloremque
        minus repellat debitis, maiores ut a quibusdam fugiat animi neque aspernatur, deserunt repudiandae facere
        officia porro est molestiae! Facere tempore facilis et eos eius accusamus dolor labore magnam, magni sequi
        perferendis omnis reiciendis ad. Sit velit nesciunt esse dolorem, magnam labore sapiente fugit libero fuga
        earum, eaque voluptas alias, dignissimos modi cumque consequatur at iste. Libero voluptatibus deleniti eaque
        quos ullam veniam enim, placeat voluptate delectus quas quae est iure, possimus dicta qui, quod incidunt sed
        adipisci dolorem. Officia obcaecati delectus omnis laudantium, fugit odio quis dolor repellendus reiciendis
        tenetur explicabo quae sapiente accusantium nam aperiam eum totam fuga, voluptatum, laboriosam harum nulla! Est
        aspernatur, alias optio soluta aut libero autem eius nulla deleniti praesentium facilis expedita, earum amet,
        illo maiores. Repellat totam, necessitatibus eaque inventore illo autem. Est eius sapiente nihil alias sit
        iusto, eum inventore! Autem eaque et amet at tempora, quae repudiandae tempore esse laudantium itaque eius
        voluptate voluptas alias, in explicabo veniam illo modi ad est distinctio ullam voluptatem dolorem. Voluptatem
        adipisci fuga cum eum eaque, magnam quo voluptatum consequuntur quis inventore sapiente animi, quia eos
        voluptate, exercitationem voluptatibus repudiandae! Cupiditate illum aut quas ullam consequuntur, nostrum
        commodi quam beatae numquam optio eveniet facere nisi dolorem quo accusantium dolore adipisci vitae atque porro,
        mollitia a unde vero delectus illo! Nesciunt expedita nemo laborum earum soluta impedit minus voluptas quasi
        alias dignissimos, cupiditate iure esse corporis illo dolor placeat totam id nisi explicabo est cum quibusdam.
        Iusto quasi quidem officia aperiam aspernatur officiis numquam quo ipsa non ad magnam aliquid incidunt
        voluptatum architecto porro ipsum eum nesciunt perferendis, dolorem temporibus maxime veniam impedit? Officia
        expedita vero magnam doloremque assumenda velit, dolores reiciendis fuga tenetur iusto earum atque odit
        repellendus nesciunt cum corrupti voluptates asperiores a dolor neque pariatur repellat? Dolores soluta dolor
        distinctio delectus perspiciatis atque, enim quaerat sapiente. Tenetur, sed eaque ad quaerat distinctio ea
        aperiam fuga aut dolores eligendi quas assumenda error commodi explicabo aliquid ullam eveniet labore, ipsa
        voluptas perspiciatis adipisci in laboriosam. Eum suscipit numquam porro, non eaque, repellat adipisci culpa
        vero dolorem debitis nostrum ea itaque? Impedit vitae amet nobis nesciunt magnam similique aspernatur eligendi
        numquam ducimus doloribus earum minus vel voluptatibus consequatur aperiam ad et doloremque eaque officia,
        obcaecati quia. Dicta excepturi quibusdam sint officia voluptatem doloribus dolorum? Nihil libero nulla
        inventore, debitis culpa, explicabo reprehenderit quibusdam, eaque sunt natus adipisci. Placeat corrupti fugiat
        inventore est harum, optio, dolor facilis veniam voluptas numquam porro ea tenetur ipsam? Reprehenderit cumque
        fugiat, sequi voluptatibus, esse sapiente nam molestias, aut quos dicta eius repudiandae obcaecati? Consectetur
        alias molestiae sed id exercitationem veritatis dolorem consequatur provident sit perferendis praesentium
        deleniti rerum libero accusamus autem delectus adipisci omnis, cupiditate beatae quo numquam distinctio? Commodi
        fugiat est distinctio voluptatem suscipit illum debitis numquam vero impedit eum aut modi, amet totam doloremque
        asperiores delectus, ab architecto itaque, ducimus deleniti ullam fuga? Officia repellat, sequi recusandae
        laborum blanditiis tempore autem, amet quae sunt quos aut tempora?
      </p>
      <div ref={newsletterRef} className="newsletter">
        <h2>Observes element !</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet cum facilis impedit. Nulla exercitationem,
        rem obcaecati tempore ad, tempora nesciunt corrupti harum quos hic labore voluptatem enim blanditiis nobis ex,
        aperiam saepe qui quidem illum consequatur. Architecto, dolores repudiandae! Expedita natus perferendis quisquam
        at commodi beatae distinctio. Ut eveniet voluptatem nostrum quos voluptas ipsa sed rerum sit reprehenderit.
        Dolor sapiente, itaque sed dignissimos non assumenda ratione, labore recusandae animi corrupti nemo quidem, in
        illum dicta cupiditate consequatur suscipit ipsum magnam molestiae. A laboriosam molestias perspiciatis quia
        adipisci. Exercitationem perspiciatis eius itaque, delectus autem molestias, ipsum dolor maxime rem soluta, vel
        molestiae. Recusandae quia minus molestiae rerum cupiditate, odio sed voluptas magnam dolorem voluptates
        deleniti eum saepe laborum mollitia, quas consequatur vel sunt velit! Nihil nemo, fugiat blanditiis delectus
        mollitia quisquam minus laudantium sequi itaque assumenda aliquam sint iste? Sequi, sint. Illum hic esse in fuga
        sit harum debitis deleniti amet dolorem. Facere similique eaque, doloremque, dolores officiis explicabo nulla ab
        ipsa assumenda sunt neque nesciunt natus dolorem odio veritatis perspiciatis. Reprehenderit, earum voluptatem
        eos saepe rem quia similique vitae fugiat veritatis. Recusandae nihil nobis officia labore, fuga iste voluptates
        quia velit magnam doloribus quos in hic atque tenetur dignissimos corrupti suscipit aliquid laboriosam deserunt
        nisi ea ipsum eaque? Voluptates iste nam et perspiciatis. Praesentium vero, porro, soluta quos commodi
        laboriosam reiciendis omnis, facilis nesciunt eos officiis deserunt autem mollitia aut illo. Dolorum ipsa
        officiis natus, accusamus vitae delectus error quis praesentium iure quo numquam possimus at nobis nesciunt in
        eum doloribus molestiae, cumque cum quas ad pariatur. Harum dolorum quasi itaque odio reiciendis suscipit
        perspiciatis ab ratione, dicta optio fugit deserunt impedit fugiat laudantium? In perferendis dignissimos, est
        quam sed, unde cum ducimus optio ratione recusandae quasi dolor sunt tempora enim pariatur dolorum!
        Reprehenderit blanditiis vero qui mollitia quas, ipsam ea repudiandae placeat sed fugiat ad illo velit quaerat
        soluta corrupti facere, excepturi ratione molestias quidem dolorum, dolorem cupiditate provident! Labore error
        rerum nisi harum, nemo eaque vel dicta? Eum sunt minima rerum quisquam commodi repellendus debitis corporis
        repudiandae perferendis officia, eius pariatur dolorum cumque vero ea molestiae magni sed sequi vel distinctio.
        Commodi aliquam mollitia nihil corporis illum modi, voluptate itaque, nulla quidem dicta sequi sint hic facere
        dolor, sit eum earum ipsa incidunt velit eius suscipit blanditiis fugit aliquid. Tenetur perspiciatis totam amet
        voluptatibus dolore aperiam, veniam quae accusamus ratione natus, minus magnam quidem? Cum, ipsa aliquid
        voluptatum consequatur esse modi repellat magnam asperiores dolorem distinctio fugit delectus nihil doloremque
        dolore optio impedit dolorum qui deserunt. Quisquam, cupiditate aspernatur hic architecto eius culpa tenetur
        inventore illum iure incidunt accusamus repudiandae doloribus dolor numquam. Ullam, repellendus? Delectus
        accusamus repellendus explicabo animi, et, est rem assumenda hic ratione laudantium, magnam tempora adipisci
        enim consequatur odio a excepturi dolorem iste expedita pariatur. Impedit, laborum iure illo tempore voluptate
        aut ducimus quod harum, expedita modi nulla veniam maxime dolor cupiditate numquam doloremque molestias magni
        natus aperiam quasi accusantium? Exercitationem animi quisquam error? Ad quisquam eligendi nulla, ipsum harum
        sint at iusto est ratione eius, quidem distinctio! Ab quia consectetur asperiores nobis nemo beatae maiores
        nihil nostrum eaque vel architecto hic at maxime mollitia, aliquam alias id quos libero esse laboriosam, magni
        amet tenetur unde sint! Eligendi libero eius nobis, repellendus quibusdam similique voluptas, praesentium
        maiores sint voluptate assumenda obcaecati deleniti! Sed necessitatibus dicta eius aut rerum nobis fuga enim
        maxime veritatis tenetur laboriosam nemo velit, quisquam id sunt harum provident ipsum labore vitae earum?
        Facilis minima aperiam, culpa itaque eum doloremque nisi nemo esse. Recusandae tenetur iusto suscipit dolorem
        quisquam incidunt eaque tempora consequatur tempore molestias cumque, dicta quidem. Delectus blanditiis dolorem
        itaque quo perspiciatis ipsa aperiam voluptatibus et explicabo! Unde porro fugiat necessitatibus explicabo
        corporis repellendus enim itaque labore omnis nemo, ratione excepturi, reprehenderit, sint laboriosam voluptas
        eaque error! Incidunt nostrum veritatis, perferendis atque corrupti quae totam veniam asperiores vel a ullam
        modi quasi, accusamus dolorem dolore vitae culpa maiores labore dicta quis minus aliquid? Labore, error ipsam
        necessitatibus praesentium deleniti molestiae ea hic rem natus velit, voluptatem reiciendis magnam. Quisquam
        asperiores perferendis alias sequi voluptatum doloremque recusandae quae. Veritatis cum nostrum quas omnis
        reprehenderit quam exercitationem suscipit? Velit, illo, consequuntur vel veniam minus voluptatibus magni iste
        corrupti, nesciunt aliquid fugiat dolore. A neque fuga ea placeat optio esse, exercitationem doloremque
        perspiciatis veritatis nemo consectetur consequuntur, quas molestias expedita enim explicabo voluptatem ad id
        rem repudiandae? Dolorem, commodi repudiandae! Eligendi, error? Doloribus neque itaque porro. Autem, tenetur.
        Beatae, quis asperiores cumque quia, excepturi qui ratione non maxime sit voluptates iusto.
      </p>
    </div>
  );
}
