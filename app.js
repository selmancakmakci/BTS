"use strict";
const terms = [
    {
        word: "51% Attack",
        meaning: `<h4>(51% SALDIRISI)</h4><br>Blokzinciri üzerinde çalışan Bitcoin veya
         diğer bir kriptoparanın hash gücü oranının
         yarı seviyesinden yükseği olan %51'
         e sahip
         kişi veya kişilerin sistemi, işlemleri
         değiştirebilecek, bozabilecek şekilde
         etkilemesine denir.`,
    },
    {
        word: "Accumulation",
        meaning: `<h4>(AKÜMÜLASYON)</h4><br>Kriptopara fiyatının yükseliş ya da düşüş
            dalgalanmaları olmadan bir süre dar bir
            fiyat aralığında hareket etmesini ifade eder.`,
    },
    {
        word: "Agreement ledger",
        meaning: `<h4>(ANTLASMA DEFTERI)</h4><br>Çok taraflı partilerin birbirleriyle müzakere
            etmek ve anlaşmaya girmek için
            kullandıkları dağıtık ağdır.
            `,
    },
    {
        word: "Airdrop",
        meaning: `<h4>(BEDELSIZ DAGITIM)</h4><br>Kriptopara proje ekiplerinin, ücretsiz olarak veya
            önceden belirlenmiş bazı şartları (talep formu
            doldurma, sosyal medya paylaşımı, beğenme vb.)
            yerine getiren kullanıcılara ücretsiz olarak kriptopara
            dağıtmasını ifade eder. Kullanıcıların cüzdanlarına
            gönderilen bu kriptoparaların kullanımı kısıtlanmış
            veya bazı şartlara (blokzincirinin yayına başlama,
            kriptopara alım satım platformunda listelenme vb.)
            bağlanmış olabilir..
            `,
    },
    {
        word: "AMA",
        meaning: `<h4>(BANA ISTEDIGINI SOR)</h4><br> Ingilizce acilimi: <p>"Ask Me Anything"</p> Yeni çıkan veya devam eden projelerin proje
            sahipleri, topluluk ile iletişimlerine devam
            edebilmek ve yatırımcı çekebilmek için düzenli
            olarak AMA etkinlikleri düzenlerler.
            `,
    },
    {
        word: "Algorithm",
        meaning: `<h4>(ALGORITMA)</h4><br>Problem çözme ya da hesaplamada takip
            edilecek kurallar ya da uygulamalar bütününü
            ifade eder.
            `,
    },
    {
        word: "Altcoin",
        meaning: `<h4>(ALTCOIN)</h4><br>Bitcoin’e alternatif olarak sunulan kripto para
            birimleri için kullanılan toplu isim. Litecoin,
            Feathercoin ve PPcoin; bunların hepsi birer
            altcoindir.
            `,
    },
    {
        word: "Anti Money Laundering",
        meaning: `<h4>(KARA PARA AKLAMA KARSITI)</h4><br>Kara para aklama karşıtı yasaları ve bu
            yasaların çiğnenmesi sonucu gerçekleştirilen
            prosedürlerin tümünü ifade eder.
            `,
    },
    {
        word: "API",
        meaning: `<h4>(UYGULAMA PROGLAMLAMA ARAYÜZÜ)</h4><br>Ingilizce acilimi: <p>"Application Programming Interface"</p> Uygulama veya web sitesi aracılığıyla verilen
            komutları arka planda çalışan yazılımlara
            aktaran bir araçtı.
            `,
    },
    {
        word: "ASIC",
        meaning: `<h4>(UYGULAMAYA ÖZGÜ TÜMLEŞİK DEVRE)</h4><br>ingilizce acilimi: <p>"Application Specific Integrated
            Circuit"</p> Belirli özel bir işlemi ya da görevi yerine
            getirmek için üretilen devrelere verilen
            isimdir. ASIC, tek bir işi yerine getirmek için
            hazırlanmış çipleri tanımlamak için kullanılır.
            `,
    },
    {
        word: "Arbitrage",
        meaning: `<h4>(ARBİTRAJ)</h4><br> Platformlar arasındaki fiyat farklarından
            faydalanarak, fiyatın düşük olduğu
            platformdan alıp, fiyatın yüksek olduğu
            platformda satış yapma işlemlerini ifade eder.
            `,
    },
    {
        word: "ASIC Miner",
        meaning: `<h4>(ASIC MADENCİSİ)</h4><br> ASIC madencileri tek bir algoritmaya göre
            programlanan ve kriptopara işlemlerini
            doğrulamak amacıyla matematiksel işlemler
            yapan cihazlardır. Örneğin Bitcoin madenciliği
            yapan bir ASIC madenciliği cihazı Bitcoin
            blokzincirinde gerçekleşen işlemleri
            doğrulamak için hesaplama yapar.
            `,
    },
    {
        word: "Asset Ownership",
        meaning: `<h4>(VARLIK SAHPİLİĞİ)</h4><br> Oyun dünyasında, oyuncuların kazandıkları
            dijital varlıklar üzerinde sahiplik hakkı olmasını
            ifade eder. GameFi projelerinde oyunların ve
            oyuncuların aksiyonlarının blokzinciri üzerine
            kaydedilmesi ile oluşur.
            `,
    },
    {
        word: "ATH",
        meaning: `<h4>(TÜM ZAMANLARIN EN YÜKSEK DEĞERİ)</h4><br>ingilizce acilimi: <p>"All Time High"</p> Bir kriptoparanın tarihinde ulaştığı en yüksek
            değeri ifade eder.
            `,
    },
    {
        word: "ATL",
        meaning: `<h4>(TÜM ZAMANLARIN EN DÜŞÜK DEĞERİ)</h4><br>ingilizce acilimi: <p>"All Time Low"</p> Bir kriptoparanın tarihinde ulaştığı en düşük
            değeri ifade eder.
            `,
    },
    {
        word: "Atomic Swap",
        meaning: `<h4>(ATOMIK TAKAS / ZINCIRLERARASI TAKAS)</h4><br>Farklı blokzincirlerinde yer alan kriptoparaların,
            arada herhangi bir aracı olmadan takas
            edilebilmesine olanak sağlayan teknolojidir.
            İşlemler, çoklu imzalı cüzdanlar ve akıllı
            kontratlar aracılığıyla alıcı ve göndericinin
            onaylarıyla gerçekleştirilir.
            `,
    },
    {
        word: "Bag",
        meaning: `<h4>(ÇANTA / SEPET)</h4><br> Kriptopara portföyünü ifade eder..
                `,
    },
    {
        word: "Bag Holder",
        meaning: `<h4>(ÇANTACI / SEPETCI)</h4><br> Portföyünde bir veya daha fazla kriptoparayı
            uzun süreli olarak saklayan kullanıcıları ifade
            eder. Bu kullanıcılar, kriptoparaların fiyatları
            düşmesine rağmen satış yapmayı tercih
            etmezler.
            `,
    },
    {
        word: "Bear Trap",
        meaning: `<h4>(AYI TUZAĞI)</h4><br>Piyasa yükseliş trendindeyken, yani boğa
            piyasası varken, ilgili kriptoparanın fiyatının
            destek çizgisinden aşağıya hızlı bir düşüş
            göstererek bir ayı piyasası başladığı algısını
            yaratmasıdır.
            `,
    },
    {
        word: "Bearish",
        meaning: `<h4>(AYI EĞILIMI)</h4><br> Bir piyasanın ve piyasadaki finansal değerlerin
            düşmesine neden olabilecek haber, olay, kişi
            ve söylemleri ifade eder.
            `,
    },
    {
        word: "BIP",
        meaning: `<h4>(BITCOIN IYILESTIRME ONERILERI)</h4><br> ingilizce acilimi: <p>"Bitcoin Improvement Proposal"</p> Bitcoin ağında gerçekleşecek yükseltme,
            iyileştirme ve geliştirme fikirlerinin yer aldığı,
            bu fikirlerin tartışıldığı süreci ifade eder.
            Merkezi bir otorite veya bir lider tarafından
            yönetilmez.
            `,
    },
    {
        word: "Bit",
        meaning: `<h4>(BIT)</h4><br> Bitcoin'in 1 milyon parçasından birini
            (0.000001 BTC) ifade eder.
            `,
    },
    {
        word: "Bitcoin",
        meaning: `<h4>(BITCOIN)</h4><br> 2008 yılında Satoshi Nakamoto rumuzlu anonim kişi ya
            da grup tarafından deneysel olarak ortaya atılmış
            herhangi bir merkezi otoriteye bağlı olmaksızın kullanıcılar
            arasında aracısız olarak değer transferi sağlayan dijital
            ödeme yöntemidir. Ulusal para birimlerine alternatif
            olarak ortaya çıkmış ancak henüz Türk hukuku
            çerçevesinde resmi bir ödeme aracı olarak kabul
            görmemiştir.
            Sembolü ฿, kısaltması ise BTC‘dir.
            `,
    },
    {
        word: "Bitcoin ATM",
        meaning: `<h4>(BITCOIN ATM)</h4><br> Bitcoin transfer edip nakit para çekilebilmesine
            olanak sağlayan para çekme makineleridir.
            Bitcoin ATM'lerine Bitcoin transfer ederek
            ATM'den nakit para çekebilirsiniz. Destekleyen
            cihazlarda nakit para yatırarak, Bitcoin
            alabilmeniz de mümkündür.
            `,
    },
    {
        word: "Bitcoin Core",
        meaning: `<h4>(BITCOIN CORE)</h4><br> Bitcoin ağı üzerinde Bitcoin düğümleri
            oluşturma ve Bitcoin'lerin depolanmasına
            yarayan bir yazılımdır.
            `,
    },
    {
        word: "Black Swan",
        meaning: `<h4>(SIYAH KUĞU)</h4><br> Beklenilmeyen, ihtimal verilmeyen bir olayın
            gerçekleşme durumunu ifade eder.
            `,
    },
    {
        word: "Block",
        meaning: `<h4>(BLOK)</h4><br> Belirli bir süre zarfında yapılmış olan işlemlere
            ilişkin işlem ve onay kayıtlarının tutulduğu
            şifrelenmiş veri kümesini ifade eder.
            `,
    },
    {
        word: "Block Explorer",
        meaning: `<h4>(BLOK GEZGINI)</h4><br> Blokzinciri üzerinde gerçekleşen işlemlerin tüm
            katılımcılar tarafından takip edilmesini
            sağlayan herkesin erişimine açık internet
            sitesini ifade eder.
            Bitcoin’in aşağıda ayırılmış blok gezgini adresi
            https://blockchain.info/.
            `,
    },
    {
        word: "Block Height",
        meaning: `<h4>(BLOK YÜKSEKLIGI)</h4><br> Bir blokzincirinde ortaya çıkmış blok sayısını
            ifade eder. Örneğin, başlangıç bloğu sıfır
            yüksekliğine sahiptir.
            `,
    },
    {
        word: "Block Reward",
        meaning: `<h4>(BLOK ÖDÜLÜ)</h4><br> Bir blokta yer alan şifrelenmiş işlem
            kayıtlarının doğruluğunu matematiksel
            işlemler ile doğrulayan
            madenci/madencilere verilen teşvik
            ödülüdür.
            `,
    },
    {
        word: "Blockchain",
        meaning: `<h4>(BLOKZİNCİR)</h4><br> Bloklar üzerinde verilerin değiştirilemez bir
            şekilde saklanmış olduğu devamlı olarak
            büyüyen merkeziyetsiz veritabanını ifade eder.
            Verilerin yer aldığı şifrelenmiş veri kümesi olan
            “blok” ile bu blokların hemen önceki bloklara
            şifrelenmiş imzalar yoluyla bir araya gelmesini
            ifade eden “zincir” ifadelerinin birleştirilmesiyle
            ortaya çıkmıştır.
            `,
    },
    {
        word: "Blockchain Game",
        meaning: `<h4>(BLOKZİNCİR TABANLI OYUN)</h4><br> Blokzinciri üzerinde çalışan oyunları ifade eder.
            Bu oyunlarda, oyun oynayan kullanıcıların, oyun
            platformlarında kazandıkları ve oluşturdukları
            eşyalar blokzincirinde saklanır.
            `,
    },
    {
        word: "Blockchain Platform",
        meaning: `<h4>(BLOKZİNCİR PLATFORMU)</h4><br> Kripto varlıkların üretilip dağıtılmasına ya da
            kullanıcıların birbirleri arasında dijital varlıkları
            takas edebilmesine aracılık eden çok amaçlı
            blokzincir. Ethereum, Waves, Neo vb.
            `,
    },
    {
        word: "Bollinger Bands",
        meaning: `<h4>(BOLLINGER BANTLARI)</h4><br> John Bollinger tarafından geliştirilen, basit hareketli ortalamaları
            esas alan indikatörün adıdır.Bollinger bantları fiyatların göreceli
            olarak yüksek veya düşük olduğu hakkında fikir vermektedir. Bu
            indikatörün değerlendirmesine göre fiyat; üst banda yakınsa
            göreceli olarak yüksek, alt banda yakınsa göreceli olarak
            düşüktür.
            `,
    },
    {
        word: "Bot",
        meaning: `<h4>(BSC)</h4><br> Belirlenmiş aksiyonlar alan bir yazılımdır.
            Borsalardaki alım-satım
            veya arbitraj işlemlerini insanlar manuel olarak
            yapmak yerine botlar geliştirmektedir.
            Bu yazılımlar, yatırımcıların yerine onların
            belirlediği stratejilerle
            işlemleri gerçekleştirebilir.
            `,
    },
    {
        word: "BSC",
        meaning: `<h4>(BOT)</h4><br> ingilizce acilimi: <p>"Binance Smart Chain"</p>
            Ethereum’a bir alternatif
            sunar. PancakeSwap gibi önemli DeFi
            platformları BSC üzerinde çalışır.
            Eylül 2020 tarihinde dünyanın en büyük kripto
            para borsası Binance
            tarafından kurulan BSC, Binance Chain ile
            paralel olarak çalışır.
            `,
    },
    {
        word: "BTC",
        meaning: `<h4>(BTC)</h4><br> Bitcoin’in kısaltmasını ifade eder.
            `,
    },
    {
        word: "Bug Bounty",
        meaning: `<h4>(ÖDÜL AVCILIGI)</h4><br> Kriptopara platformlarında veya kriptopara
            projelerinin kodlarında ya da
            uygulamalarında yer alan güvenlik açıklarını
            ve sistem hatalarını raporlayanların
            ödüllendirdiği süreci tanımlamak için kullanılır.
            `,
    },
    {
        word: "BTD",
        meaning: `<h4>(DÜŞÜKTEN ALIM)</h4><br> ingilizce acilimi: <p>"Buy The Dips"</p>
            Bir kripto paranın değeri hazır düşmüşken,
            burada bir alım fırsatı vardır ve
            buradan alınmalı, bu fırsat kaçırılmamalıdır!
            `,
    },
    {
        word: "Bullish",
        meaning: `<h4>(BOĞA EGİLİMİ)</h4><br> Bir piyasanın ve piyasadaki finansal değerinin
            yükselmesine neden olabilecek haber, olay,
            kişi ve söylemleri ifade eder.
            `,
    },
    {
        word: "Burned Coin",
        meaning: `<h4>(KULLANILMAYAN KRIPTOPARA)</h4><br> Üretilmiş ancak herhangi bir sebeple
            geliştiriciler ya da kullanıcılar tarafından
            kullanılamaz hale getirilmiş kriptopara miktarını
            temsil eder. Kriptopara bir kere yakıldıktan
            sonra tekrar transfer edilemez ya da
            harcanamaz.
            `,
    },
    {
        word: "Candlestick Chart",
        meaning: `<h4>(MUM GRAFİĞİ)</h4><br> Belirli bir zaman dilimini kapsayan grafiklerdir
            ve güncel trend hakkında bilgi sahibi
            olunmasını ağlayan bir teknik analiz
            yöntemidir. Piyasa hareketlerinin yükseliş
            veya alçalış trendini gösteren bir tablo ortaya
            koyar.
            `,
    },
    {
        word: "Central Ledger",
        meaning: `<h4>(MERKEZİ KAYIT DEFTERİ)</h4><br> Finansal işlemleri kayıt altına alan ve banka
            gibi merkezi bir yönetim tarafından yönetilen
            kayıt defterini ifade eder.
            `,
    },
    {
        word: "Centralized",
        meaning: `<h4>(MERKEZ)</h4><br> Bir merkezden yönetilen ve az sayıda node’un
            tüm ağı kontrol altında tutabildiği yapıyı ifade
            eder.
            `,
    },
    {
        word: "Chain Split",
        meaning: `<h4>(ZİNCİR BÖLÜNMESİ)</h4><br> Bir blokzincirin teknik değişiklik ya da bir
            zorunluluk nedeniyle birden fazla kola
            ayrılmasını ifade eder.
            `,
    },
    {
        word: "Change",
        meaning: `<h4>(PARA ÜSTÜ)</h4><br> Bitcoin transferlerinde, gönderilen tutar, adreste bulunan
            tutardan az ise, gönderilen tutar ve işlem ücretinden arta
            kalan kısım para üstü) cüzdandaki başka bir adrese change
            address) gönderilir. Bunun nedeni, Bitcoin transferlerinde,
            değer transferi yapılırken sahipliğin transfer edilmesidir.
            Transfer edilen tutarın sahipliği, yeni sahibine aktarılırken,
            kalan tutar, sahipliğinin belirlenmesi için yeni bir adrese
            aktarılır.
            `,
    },
    {
        word: "Change Address",
        meaning: `<h4>(PARA ÜSTÜNÜN GÖNDERİLECEĞİ ADRES)</h4><br> Bitcoin transferlerinde, gönderilen tutar,
            adreste bulunan tutardan az ise, gönderilen
            tutar ve işlem ücretinden arta kalan kısım para
            üstü) cüzdandaki başka bir adrese gönderilir.
            Bu adres para üstü adresi olarak tanımlanır ve
            adresin kontrolü özel anahtarı) aynı
            kullanıcıdadır.
            `,
    },
    {
        word: "Cipher",
        meaning: `<h4>(ŞİFRE)</h4><br> Veriyi özel veya gizli yollarla kodlayan ve bu
            kodu çözen kodlanmış algoritmayı ifade eder.
            `,
    },
    {
        word: "Circulating Supply",
        meaning: `<h4>(TEDAVÜLDEKİ MİKTAR)</h4><br> Veriyi özel veya gizli yollarla kodlayan ve bu
            kodu çözen kodlanmış algoritmayı ifade eder.
            `,
    },
    {
        word: "Client",
        meaning: `<h4>(İSTEMCİ)</h4><br> Blokzincirinde işlem yapılmasına olanak
            sağlayan bir masaüstü, dizüstü bilgisayar ya
            da mobil cihaz üzerinde çalışan yazılım
            programını ifade eder.
            `,
    },
    {
        word: "Cloud Mining",
        meaning: `<h4>(BULUT MADENCİLİĞİ)</h4><br> Madencilik cihazlarını çalıştırabilecek ve bu
            cihazları yönetebilecek teknik bilgi ve zaman
            konusunda yaşanabilecek zorlukları üstlenen,
            satın alma, konumlandırma, soğutma, cihaz
            bakımı gibi kriptopara madenciliğinin tüm
            aşamalarını yöneten şirketler tarafından
            kullanıcılara sunulan madencilik hizmetidir.
            `,
    },
    {
        word: "Co-singer",
        meaning: `<h4>(EŞ-İMZALAYICI)</h4><br> Bir kriptopara cüzdanına kısmi erişim ve işlem
            yetkisi olan kişi ya da kuruluşu ifade eder.
            `,
    },
    {
        word: "Coin",
        meaning: `<h4>(KOİN)</h4><br> Kendisine ait bir blokzinciri platformuna sahip
            olan ve bir projeden bağımsız olarak faaliyet
            gösterebilen, bir ödeme methodu olarak
            kullanılabilen para birimi benzeri dijital değer
            temsilini ifade eder.
            `,
    },
    {
        word: "Coin Burn",
        meaning: `<h4>(KRİPTOPARA YAKMA İŞLEMİ)</h4><br> Kriptoparaların belirli bir kısmının, proje ekibi
            veya kriptopara sahibi tarafındna tekrar
            kullanılamaz hale getirilmesini ifade eder.
            Yakılan kriptoparalar dolaşımdaki toplam
            adedin azalmasına neden olur.
            `,
    },
    {
        word: "Cold Storage",
        meaning: `<h4>(SOĞUK DEPOLAMA)</h4><br> Kriptoparaların sürekli olarak barındırıldığı
            internete bağlı olmayan çevrimdışı ortamları
            ifade eder.
            `,
    },
    {
        word: "Cold Wallet",
        meaning: `<h4>(SOĞUK CÜZDAN)</h4><br> İnternet bağlantısı bulunmayan kriptopara
            saklama cüzdan türüdür. Kağıt cüzdan ve
            donanım cüzdan olmak üzere iki yaygın çeşidi
            vardır.
            `,
    },
    {
        word: "Confirmation",
        meaning: `<h4>(ONAY)</h4><br> Bir işlemin başarılı şekilde şifrelenerek
            blokzincirine eklenmesi işlemini ifade eder.
            Kriptopara borsalarında madencilik sistemine
            bağlı olarak transfer işlemlerinin geçerli
            sayılabilmesi için gerekli olan onay adetleri
            farklılık gösterir. Örneğin, Bitcoin transferleri 2
            onay ile doğrulanırken Ethereum transferleri 20
            onay aldığında doğrulanmış sayılır.
            `,
    },
    {
        word: "Consensus",
        meaning: `<h4>(TAM MUTABAKAT)</h4><br> Blokzinciri üzerindeki katılımcıların işlemlerin
            geçerliliği ve defterlerin birbirlerinin kopyaları
            olduğuna dair fikir birliğine varmalarını ifade
            eder.
            `,
    },
    {
        word: "Consensus Algorithm",
        meaning: `<h4>(MUTABAKAT ALGORİTMASI)</h4><br> Ait olunan topluluk tarafından kabul edilmiş,
            bir grup veya sistemi yönetmek veya ortak bir
            fikirde uzlaşmak için alınmış kararlar
            bütünüdür. Tüm kullanıcıların eşit haklara
            sahip olması amaçlanır.
            `,
    },
    {
        word: "Consortium Blokchain",
        meaning: `<h4>(MUTABAKAT BLOCKZİNCİR)</h4><br> Organizasyonel bir uzlaşmaya dayanan, “yarı
            özel” olan ve kontrollü bir kullanıcı grubuna
            sahip, ancak farklı organizasyonlarda
            çalışabilen blokzinciri yapısını ifade eder. Açık
            blokzinciri yapıları ile herkese açık blokzinciri
            yapılarının bir bileşimini ifade eder.
            `,
    },
    {
        word: "Copy Cat",
        meaning: `<h4>(KOPYACI KEDİ)</h4><br> Bu kavram genellikle başka birilerinin fikirlerini
            çalan ve bu fikirleri uygulamaya döken kişiler
            için kullanılır.
            `,
    },
    {
        word: "Crypto",
        meaning: `<h4>(KRİPTO)</h4><br> Gizlilik, kimlik denetimi, bütünlük gibi bilgi
            güvenliği unsurlarını sağlamak için çalışan
            matematiksel yöntemler bütününü ifade eder.
            Bitcoin işlemlerini doğrulamak ve güvenliğini
            sağlamak için kullanılır.
            `,
    },
    {
        word: "Cryptoassets",
        meaning: `<h4>(KRİPTOVARLIK)</h4><br> Dağıtık defter teknolojisinin bir uygulaması
            olarak ortaya çıkan ve elektronik ortamda
            aktarım, saklama ve takas faaliyetlerine konu
            edilebilen bir değerin veya sözleşmeden
            doğan bir hakkın güvenli dijital ortamda
            kriptografik olarak temsilini ifade eder.
            `,
    },
    {
        word: "Cryptocurrency",
        meaning: `<h4>(KRİPTOPARA)</h4><br> Merkezi otoritelerce kabul gören ödeme
            araçlarına eşler arası bir alternatif olarak
            ortaya çıkan ve bir değişim aracı olarak
            kullanılabilen kriptografik mekanizması ile
            güvence altına alınmış dijital ortamdaki bir
            değerin temsilini ifade eder.
            `,
    },
    {
        word: "Cryptographic Hash Function",
        meaning: `<h4>(KRİPTOGRAFİK ÖZET FONKSİYONU)</h4><br> Blokzincire yazılacak verilerin kriptografik
            şifreleme algoritmalarıyla şifrelenmesi, verinin
            belirli karakter sayısına indirilmesini ifade eder.
            (SHA256 algoritmasıyla şifrelenen her veri 64
            karaktere indirgenir).
            `,
    },
    {
        word: "Cryptography",
        meaning: `<h4>(KRİPTOGRAFİ)</h4><br> Bir verinin içermiş olduğu bilgilerinin
            istenmeyen taraflarca erişilebilir olmasını
            engellemek amacıyla kullanılan şifreleme
            yöntemini ifade eder.
            `,
    },
    {
        word: "Cryptojacking",
        meaning: `<h4>(KRİPTOGRAFİ)</h4><br> Siber saldırganların, cihazlara yükledikleri
            zararlı yazılımlar ile kullanıcının bilgisi dışında
            bilgisayar veya mobil cihazların işlemci veya
            grafik kartları kullanılarak kriptopara
            madenciliği yapmasını ifade eder.
            `,
    },
    {
        word: "Custodial",
        meaning: `<h4>(EMANETÇİ)</h4><br> Kriptopara cüzdanlarının özel anahtarlarını
            saklayarak güvenliğini temin etmek üzere
            servis sağlayıcı, kriptopara borsaları veya bir
            platform gibi üçüncü bir kişiye yetki verilmesini
            ifade eder. Bu üçüncü kişiler, özel anahtarları
            kullanıcı adına saklar ve kullanıcıya erişim için
            kullanıcı adı ve parola tanımlar.
            `,
    },
    {
        word: "Cyberworld",
        meaning: `<h4>(SİBER DÜNYA)</h4><br> Bilgisayarların birbirleriyle iletişim halinde
            olduğu sistemi ifade eder. Çok oyunculu
            oyunlar farklı bilgisayarların kurduğu iletişim
            sayesinde gerçekleştiği için bir cyberworld
            örneğidir.
            `,
    },
    {
        word: "Cypherpunk",
        meaning: `<h4>(ŞİFREPUNK)</h4><br> Gizliliği sağlamak için bir bilgisayar ağına
            erişirken şifreleme kullanan özellikle devlet
            yetkililerinden bir kişiyi ifade eder.
            `,
    },
    {
        word: "Dag",
        meaning: `<h4>(YÖNLÜ ÇEVRİMİSZ GRAFİK)</h4><br> ingilizce acilimi: <p>"Directed Acyclic Graph"</p> Bir uçtan başlayarak birbirine temas
            etmeden, aynı noktaya geriye dönmeden,
            tekrarlamadan uzayan eğriyi ifade eder.
            `,
    },
    {
        word: "Date Of Launch",
        meaning: `<h4>(ÇIKIŞ TARİHİ-LANSMAN)</h4><br> Kriptopara arzı kapsamında halka arz
            edilecek olan token/jetonların ilk çıkış tarihini
            ifade eder.
            `,
    },
    {
        word: "Dead Cat Bounce",
        meaning: `<h4>(ÖLÜ KEDİ SIÇRAMASI)</h4><br> Kriptopara arzı kapsamında halka arz
            edilecek olan token/jetonların ilk çıkış tarihini
            ifade eder.
            `,
    },
    {
        word: "Death Cross",
        meaning: `<h4>(ÖLÜM KESİŞMESİ)</h4><br> Teknik analizde kısa vadeli hareketli ortalama
            aşağı doğru eğilim gösterip uzun vadeli
            hareketli ortalamayı kestiğinde ayı piyasasını
            temsilen bir kriptopara biriminin fiyat
            trendinde düşüş sinyali olarak değerlendirilen
            yapıyı ifade eder.
            `,
    },
    {
        word: "DDoS Attack",
        meaning: `<h4>(DDOS SALDIRISI)</h4><br> ingilizce acilimi: <p>"Distrubituted Denial-of-service Attack"</p>
            Dağıtık Hizmet Reddi Saldırısı, web siteleri ya da
            servislerine, aynı anda birden fazla IP adresi
            üzerinden, çok sayıda cihaz ile eş zamanlı erişim
            istekleri göndererek, web sitesinin ya da servisinin
            sistem kaynaklarının tükenmesine ve kullanıcı
            isteklerine cevap verememesine neden olan siber
            saldırı türüdür.
            `,
    },
    {
        word: "Decentralized",
        meaning: `<h4>(MERKEZİ OLMAYAN-MERKESSİZ)</h4><br> Kontrolün tek merkezden gerçekleşmediği,
            dağıtık ve bağımsız yapıyı ifade eder.
            `,
    },
    {
        word: "dApps",
        meaning: `<h4>(MERKEZİYETSİZ UYGULAMALAR)</h4><br> Merkezi olmayan bir ağ üzerinde çalışan
            uygulama. Uygulama tek bir sunucuda
            barındırılmak yerine ağa bağlı tüm
            sunucularda çalışır.
            `,
    },
    {
        word: "DAO",
        meaning: `<h4>(MERKEZİYETSİZ OTONOM ORGANİZASYON)</h4><br> ingilizce acilimi: <p>"Decentralized Autonomous Organizations"</p> Akıllı sözleşmelerde kodlanmış kuralların
            uygulandığı organizasyonu ifade eder.
            `,
    },
    {
        word: "DEX",
        meaning: `<h4>(MERKEZİYETSİZ BORSA)</h4><br> ingilizce acilimi: <p>"Decentralized Exchange"</p> Merkezi bir kontrole ihtiyaç duymaksızın
            kriptopara ve diğer dijital varlıkların eşler
            arasında alım satım işlemlerini sağlayan
            platformu ifade eder.
            `,
    },
    {
        word: "DEF",
        meaning: `<h4>(MERKEZİYETSİZ FİNANS)</h4><br> ingilizce acilimi: <p>"Decentralized Exchange"</p> Merkezi otoritelere ihtiyaç duyulmadan,
            herhangi bir aracı kurum olmadan işlem
            yapılabilen finansal sistemleri ifade
            eder.
            `,
    },
    {
        word: "Decryption",
        meaning: `<h4>(DEŞİFRELEMEK-ŞİFRE ÇÖZMEK)</h4><br> Şifrelemeyle okunamaz hale getirilmiş verilerin
            şifrelenmemiş formuna dönüştürülmesi
            işlemini ifade eder.
            `,
    },
    {
        word: "Degen",
        meaning: `<h4>(DEJENERE)</h4><br> Bu kavram genellikle riskli yatırımlar yapan ve
            kripto para ekosisteminde olmaz işlere giren
            kişiler için kullanılır.
            `,
    },
    {
        word: "Delist",
        meaning: `<h4>(LİSTEDEN ÇIKARMAK)</h4><br> Bir alım satım platformunda yer alan finansal
            bir varlığın listeden çıkarılması ve o varlığa ait
            işlemlerin durdurulmasını ifade eder.
            `,
    },
    {
        word: "Deterministic Wallet",
        meaning: `<h4>(BELİRLEYİCİ CÜZDAN)</h4><br> Özel anahtarların, tohum adı verilen 12-24
            kelimelik anahtar kelime grubu kullanılarak
            oluşturulduğu kriptopara cüzdanı. Anahtar
            kelime grubu elinizde olduğu sürece özel
            anahtarlarınıza ulaşabilir, kripto varlıklarınızı
            başka sağlayıcıların cüzdanlarına
            taşıyabilirsiniz.
            `,
    },
    {
        word: "Diamond hands",
        meaning: `<h4>(ELMAS ELLER)</h4><br> İlk kez Reddit forumunda ortaya çıkan bu
            kavram, yüksek risk töleransı olan yatırımcıları
            ifade eder. Varlıklarının değerinde büyük bir
            düşüş veya yükseliş de yaşansa, panik satışlar
            yapmazlar.
            `,
    },
    {
        word: "Difficulty Bomb",
        meaning: `<h4>(ZORLUK DERECESİ PATLAMASI)</h4><br> Kriptopara üretim sürecini etkileyen zorluk
            derecesinin kısa süre içerisinde çok fazla
            artmasını ifade eder. Zorluk derecesinin
            aniden yükseldiği dönemlerde, kriptopara
            üretimi bir süre gecikebilir ve madencilerin
            gelirleri önemli ölçüde azalır.
            `,
    },
    {
        word: "Digital Commodity",
        meaning: `<h4>(DİJİTAL EMTİA)</h4><br> Dijital ortamda bir değeri temsil eden ve alımsatım
            işlemlerine konu edilebilen emtiaları
            ifade eder. Örneğin, Bitcoin bir dijital emtiadır.
            `,
    },
    {
        word: "Digital Currency",
        meaning: `<h4>(DİJİTAL PARA BİRİMİ)</h4><br> Dijital ortamda mevcut olan para birimini ifade eder. Fiziki
            para birimleri ile benzerlik göstermekle beraber dijital
            ortamda anlık işlemlerin yapılmasını sağlar. Fiziki para
            birimleri ile alınıp satılabilen ürün ve hizmetler dijital para
            ile de aynı işlemlere konu olabilir ancak fiziki para
            birimlerinden farklı olarak sosyal ağlar, çevrimiçi
            platformlar ve oyunlarda özellikle tercih edilmektedir.
            `,
    },
    {
        word: "Digital Identity",
        meaning: `<h4>(DİJİTAL KİMLİK)</h4><br> Sahibini dijital ortamda tanımlamak üzere adsoyad,
            doğum yeri, doğum tarihi gibi kimlik
            bilgilerini blokzinciri tabanlı depolayan ve
            barındırdığı bu kimlik verilerini doğrulayan
            dijital kodu ifade eder.
            `,
    },
    {
        word: "Digital Signature",
        meaning: `<h4>(DİJİTAL İMZA)</h4><br> Dijital ortamda gerçekleştirilen işlemlerde
            adres sahibini doğrulayan ve temsil eden
            benzersiz kod kümesini ifade eder.
            `,
    },
    {
        word: "Distributed",
        meaning: `<h4>(DAĞITIK)</h4><br> Verilerin belirli bir düzene ve merkeziyete bağlı
            olmaksızın konumlandırılmasına imkanimkân
            veren veri taşıma yapısını ifade eder.
            `,
    },
    {
        word: "Distributed Consensus",
        meaning: `<h4>(DAĞITIK MUTABATAK)</h4><br> Bir ağdaki tüm katılımcıların, merkezi bir
            otoriteye ihtiyaç duymaksızın, işlemlerin
            geçerliliğine dair fikir birliğine varmalarını ifade
            eder.
            `,
    },
    {
        word: "Distributed Ledger",
        meaning: `<h4>(DAĞITIK DEFTER)</h4><br> Verilerin tek bir merkeze bağlı olmaksızın
            düzensiz ve düğümlerde dağılmış olarak
            depolandığı cüzdanları ifade eder. Bu
            cüzdanlar, herkesin erişimine açık olabileceği
            gibi erişim izinli yadayâda özel olarak da
            bulunabilir.
            `,
    },
    {
        word: "DLT",
        meaning: `<h4>(DAĞITIK DEFTER TEKNOLOJİSİ)</h4><br> ingilizce acilimi: <p>"Distributed Ledger Technology"</p> İşlemlerin yürütülmesi, onaylanması veya
            yetkilendirilmesi gibi faaliyetlerin merkezi bir
            otoriteye ihtiyaç duyulmaksızın tüm
            katılımcıların bağımsız bir ağda onaylaması ile
            düğümlerde tutulduğu teknolojiyi ifade eder.
            `,
    },
    {
        word: "DYOR",
        meaning: `<h4>(KENDİ ARAŞTIRMANI YAP)</h4><br> ingilizce acilimi: <p>"Do Your Own Research"</p> Ekosistemde birisi bir projeyi övdükten veya
            yerdikten sonra DYOR ifadesini kullanır ve
            insanlara kendi araştırmalarını kendilerinin
            yapmaları gerektiğini söyler.
            `,
    },
    {
        word: "Dollar Cost Averaging",
        meaning: `<h4>(DOLAR MALİYET ORTALMASI)</h4><br> Bir finansal varlığa, belli zaman ve değer
            aralıklarında, devamlılık gösterecek şekilde
            oluşturulan yatırım modelini ifade eder.
            `,
    },
    {
        word: "Double SpendIng",
        meaning: `<h4>(ÇİFTE HARCAMA)</h4><br> Kriptopara harcama işlemenin aynı sahiplik
            bilgisi ve aynı dijital imza ile birden fazla kez
            gerçekleştirilmesini ifade eder. Kriptopara
            faaliyetlerinin merkezi bir sistem tarafından
            doğrulanamamasının getirdiği risklerden
            biridir.
            `,
    },
    {
        word: "Dow Theory",
        meaning: `<h4>(DOW TEORİSİ)</h4><br> Dow teorisi teknik analizin kurulmasına temel
            sağlayan teoridir. Piyasanın uzun vadede
            hangi yöne gideceğini tahmin edip bu
            doğrultuda yerinde yatırımlar yapılmasını
            amaçlamayan görüşler öne sürmektedir. Altı
            temel ilkesi bulunmakta.
            `,
    },
    {
        word: "Dump",
        meaning: `<h4>(ANİ FİYAT DÜŞÜŞÜ)</h4><br> Kriptopara fiyatının kısa zaman dilimi
            içerisinde, rutin piyasa hareketlerinin aksine
            hızla düşmesini ifade eder.
            `,
    },
    {
        word: "Dust TransactIons",
        meaning: `<h4>(GEREKSİZ TRANSFER)</h4><br> Blokzincirinde yer tutmakla birlikte finansal
            maliyeti oldukça az olan işlemleri ifade eder.
            Bu tip işlemlerin zincirde yer alması veri
            boyutunu arttırdığı için Bitcoin geliştiricileri
            tarafından bu yöndeki işlemleri kaldırmak
            üzere çalışmalar yapılmaktadır.
            `,
    },
    {
        word: "Emission of Coin",
        meaning: `<h4>(KRİPTOPARA EMİSYONU)</h4><br> Herhangi bir kriptoparanın üretilme hızını ifade
            eder.
            `,
    },
    {
        word: "ERC-20",
        meaning: `<h4>(ERC-20)</h4><br> ERC-20, Akıllı kontratlara kriptopara olarak kullanılmak üzere
            jetonların entegre edilmesi için bir Ethereum jeton
            standardıdır.
            `,
    },
    {
        word: "ERC-721",
        meaning: `<h4>(ERC-721)</h4><br> ERC-20, ERC-721 ise dönüşümsüz, bölünemez ve
            benzersiz jetonlar oluşturmak üzere 2017'de çıkarılmış bir
            diğer jeton standardıdır. ERC20 jetonları, kriptopara jetonları
            ERC721 jetonları ise değer jetonları olarak tanımlayabiliriz.
            ERC721 jetonları takas edilemez ama borç verilebilir ya da
            devredilebilir.
            `,
    },
    {
        word: "Escrow",
        meaning: `<h4>(EMANET-EMANETÇİ)</h4><br> Escrow Agent (Emanetçi) veya Escrow
            Service (Emanet Hizmeti) yerine kullanılan
            terim, birbirini tanımayan veya aralarında
            güven birliği sağlamamış tarafların, alışveriş
            yaparken kullandıkları aracılık hizmetidir.
            `,
    },
    {
        word: "Ether",
        meaning: `<h4>(ETHEREUM)</h4><br> Açık kaynak kodlu bir blokzinciri projesi olarak
            geliştirilen ve herkes tarafından erişilebilir olan
            Ethereum Sanal Makinası üzerinde faaliyet
            gösteren blokzinciri platformunu ifade eder.
            `,
    },
    {
        word: "Eip",
        meaning: `<h4>(ETHEREUM İYİLEŞTİRME ÖNERİLERİ)</h4><br> ingilizce acilimi: <p>"Ethereum Improvement Proposals"</p> Ethereum ağ yükseltmeleri ve uygulama
            standartlarının tartışıldığı ve geliştirildiği
            süreçleri ifade etmektedir..
            `,
    },
    {
        word: "Fake out",
        meaning: `<h4>(KANDIRMAK)</h4><br> Bir grafik üzerinde gerçekleşeceği tahmin
            edilen bir fiyat hareketi beklentisi ile işlem
            gerçekleştirilmesi ama beklenen hareketin
            oluşmamasını ifade eder.
            `,
    },
    {
        word: "Fan Token",
        meaning: `<h4>(TARAFTAR JETONU)</h4><br> Bir kişi ya da kuruma özel olarak oluşturulan
            jetonları ifade eder. Kullanıcılar, taraftar
            jetonlarına sahip olarak, taraftarı oldukları veya
            sempati duydukları kulüplere destek olabilir ve
            kulüplerin sağladığı maç bileti forma gibi
            ödüllere sahip olabilirler.
            `,
    },
    {
        word: "Faucet",
        meaning: `<h4>(MUSLUK)</h4><br> Belirli görevleri yerine İnternet sitelerinde vakit
            geçirerek reklamlara tıklayarak veya anket
            çözerek küçük miktarlarda kriptopara
            kazanma yöntemidir.
            `,
    },
    {
        word: "Fiat Currency",
        meaning: `<h4>(İTİBARİ PARA)</h4><br> İtibari para, ilgili devletin onay verip bastığı
            ve piyasaya sürdüğü kağıt ve madeni olarak
            basılabilen paradır. Türk Lirası, Amerikan
            Doları, Euro ve diğer ülkelerin para birimleri
            itibari para birimidir.
            `,
    },
    {
        word: "Fiat Backed Currency",
        meaning: `<h4>(İTİBARİ PARA DESTEKLİ KRİPTOPARA)</h4><br> Sabitlendiği ulusal para birimine göre
            değerlendirilen kriptoparaları ifade eder.
            Ortaya çıkış amacı değer istikrarsızlığını
            gidermektir.
            `,
    },
    {
        word: "FGPA",
        meaning: `<h4>(ALANDA PROGRAMLANABİLİR KAPI DİZİSİ)</h4><br> ingilizce acilimi: <p>"Field Programmable Gate Away"</p> Düşük enerji tüketimi ve yüksek performans
            sağladığı ve algoritma bazlı kullanılabildiği
            için kriptopara madenciliğinde de kullanılan
            işlemcilerdir.
            `,
    },
    {
        word: "Financial Risk",
        meaning: `<h4>(FİNANSAL RİSK)</h4><br> Para, sermaye veya varlık kaybetme
            olasılığıdır. Birçok parametreden etkilenir ve
            çeşitli göstergeleri bulunur.
            `,
    },
    {
        word: "Flash Loan",
        meaning: `<h4>(FLAŞ KREDİ)</h4><br> Para, sermaye veya varlık kaybetme
            olasılığıdır. Birçok parametreden etkilenir ve
            çeşitli göstergeleri bulunur.
            `,
    },
    {
        word: "Flash Loan",
        meaning: `<h4>(FLAŞ KREDİ)</h4><br> Borç alıp verme işleminin blokzinciri üzerine
            kaydedilip 15 saniye içinde alınan borcun geri
            ödendiği teminatsız kredi işlemini ifade eder.
            `,
    },
    {
        word: "Fomo",
        meaning: `<h4>(FIRSATLARI KAÇIRMA KORKUSU)</h4><br> ingilizce acilimi: <p>"Fear of Missing Out"</p> Günümüzde yaşanan trendleri kaçırma
            korkusudur ve fırsatları kaçırma duygusudur.
            Kriptopara dünyasında ise kriptopara veya
            jetonu doğru zamanda alma veya doğru
            zamanda satma fırsatını kaçırma durumunu
            ifade eder.
            `,
    },
    {
        word: "Fomo",
        meaning: `<h4>(FIRSATLARI KAÇIRMA KORKUSU)</h4><br> ingilizce acilimi: <p>"Fear of Missing Out"</p> Günümüzde yaşanan trendleri kaçırma
            korkusudur ve fırsatları kaçırma duygusudur.
            Kriptopara dünyasında ise kriptopara veya
            jetonu doğru zamanda alma veya doğru
            zamanda satma fırsatını kaçırma durumunu
            ifade eder.
            `,
    },
    {
        word: "Fork",
        meaning: `<h4>(ÇATALLANMA)</h4><br> Bir blokzincirin teknik değişiklik ya da bir
            zorunluluk nedeniyle birden fazla kola
            ayrılması. Teknik değişiklik geriye doğru
            uyumlu olursa yumuşak çatallanma, uyumsuz
            olursa sert çatallanma olarak adlandırılır.
            `,
    },
    {
        word: "Flipping",
        meaning: `<h4>(SAYGISIZ)</h4><br> Kısa zamanda kar amacı güden alım-satımlar
            için kullanılıyor. Flipping yapan kişiler bir varlığın
            fiyatını düşük gördüğünde hemen alıyor ve az
            bir kazanç ile hemen elinden çıkarıyor.
            `,
    },
    {
        word: "Floor price",
        meaning: `<h4>(TABAN FİYATI)</h4><br> Listelenen bir NFT veya kripto para için en
            düşük fiyatı ifade eden floor price, listelenme
            taban fiyatıdır.
            `,
    },
    {
        word: "Floor sweeping",
        meaning: `<h4>(ZEMİN SÜPÜRME)</h4><br> Listelenen varlıkları taban fiyattan “süpürüp”
            toplayan yatırımcıların uyguladıkları bir yöntem
            olarak ifade edilebilir.
            `,
    },
    {
        word: "FUD",
        meaning: `<h4>(TEDİRGİNLİK)</h4><br> ingilizce acilimi: "Fear uncertainty and doubt"
            Kriptopara fiyatının
            düşeceğine dair duyulan korku, belirsizlik ve
            şüphe ile ortaya çıkan tedirginlik durumunu
            ifade eder.
            `,
    },
    {
        word: "Full Node",
        meaning: `<h4>(TAM DÜĞÜM)</h4><br> Doğrulama yaparken başka bir düğüme
            ihtiyaç duymayan, blokzincirinin tamamının
            kopyasına sahip olan düğümü ifade eder.
            `,
    },
    {
        word: "Fundamental Analysis",
        meaning: `<h4>(TEMEL ANALİZ)</h4><br> Bir kriptoparanın içerisinde bulunduğu
            koşullar, kriptopara projelerindeki gelişmeler,
            ekonomik koşullar, enflasyon veya faiz
            politikaları gibi genel bir resmi gösterebilecek
            unsurlara bakılır. Kriptopara varlığının gerçek
            değerinin belirlenmesi hedeflenir.
            `,
    },
    {
        word: "Gamefi",
        meaning: `<h4>(OYUN FİNANSI)</h4><br> Game (oyun) ve Finance (finans)
            kelimelerinin birleşiminden oluşur. Blokzinciri ve
            oyun endüstrisinin birleşimiyle ortaya çıkan bir
            finansal anlayıştır.
            `,
    },
    {
        word: "GAS",
        meaning: `<h4>(GAZ HESAPLAMA BİRİMİ)</h4><br> Ethereum blokzincirinde işlemlerin
            gerçekleştirilmesi için ağ üzerinde ortaya
            çıkan işlem ücretlerinin hesaplanmasını
            ifade ederr.
            `,
    },
    {
        word: "Gem",
        meaning: `<h4>(GEM)</h4><br> Değeri düşük ve popüler olmayan, bununla
            birlikte yükselme potansiyeli barındığına
            inanılan kriptoparalar için kriptopara topluluğu
            içerisinde kullanılan bir jargondur.
            `,
    },
    {
        word: "Genesis Block",
        meaning: `<h4>(BAŞLANGIÇ BLOGU)</h4><br> Blokzincirin ilk bloğuna (sıfırıncı blok) verilen
            isimdir. Bu blokta, kriptoparanın üretim
            şartları, üretim miktarı, üreticinin özel mesajı
            vb. bilgiler yer alır.
            `,
    },
    {
        word: "Gigahash",
        meaning: `<h4>(GIGA İŞLEMCİ GÜCÜ)</h4><br> Kriptopara madenciliğinde işlemci gücünü
            ifade etmek için kullanılan ölçü birimidir.
            `,
    },
    {
        word: "Gold Backed Currency",
        meaning: `<h4>(ALTINA ENDEKSLİ KRİPTOPARA)</h4><br> Karşılığı altın değerini temsil eden kriptopara
            birimini ifade ederr.
            `,
    },
    {
        word: "Golden Cross",
        meaning: `<h4>(ALTIN KESİŞİM)</h4><br> Teknik analizde kısa vadeli hareketli
            ortalamanın, uzun vadeli büyük bir hareketli
            ortalamayı yukarı doğru kestiği yapıyı ifade
            eder.
            `,
    },
    {
        word: "Gmi",
        meaning: `<h4>(BU İŞ OLACAK!)</h4><br> Bir kripto paraya yatırım yapmışsınız ve
            bekliyorsunuz. Değerin yükseleceğine ve
            zengin olacağınıza inanıyorsunuz. O zaman
            GMI!.
            `,
    },
    {
        word: "Gmi",
        meaning: `<h4>(BU İŞ OLACAK!)</h4><br> ingilizce acilimi: <p>"Gonna Make It"</p> Bir kripto paraya yatırım yapmışsınız ve
            bekliyorsunuz. Değerin yükseleceğine ve
            zengin olacağınıza inanıyorsunuz. O zaman
            GMI!.
            `,
    },
    {
        word: "Governance Token",
        meaning: `<h4>(YÖNETİŞİM JETONU)</h4><br> Blokzincirinde geliştirilen projelere
            kullanıcıların katılması ve projelerin
            yönetiminde söz sahibi olması için kullanılan
            jeton türünü ifade eder.
            `,
    },
    {
        word: "GWEI",
        meaning: `<h4>(GWEI)</h4><br> GWEI Ethereum’un en ufak birimidir.
            Genellikle yatırma-çekme işlemleri
            yapacağımız zaman Gas işlem ücreti olarak
            ilgili tutar GWEI olarak görünür.
            1 GWEI, 0.000000001 ETH’ye eşittir.
            `,
    },
    {
        word: "Halving",
        meaning: `<h4>(ÖDÜL YARILANMASI)</h4><br> Bitcoin’in ilk çıkarıldığı andan, ilk 210.000 blokun
            çıkarılmasını takiben madencilere tanınan
            ödüllerin yarı yarıya inmesini ifade eder.
            `,
    },
    {
        word: "Hammer Candlestick ",
        meaning: `<h4>(ÇEKİÇ MUM FORMASYONU)</h4><br> Bir mum grafiğinde alt fitilin gövdeden en az
            iki kat daha uzun olduğu durumu ifade etmek
            için kullanılır. Bir kriptoparanın en dip
            noktadan sekmesinin sonucunda, fiyat
            grafiğinde çekiç şeklinde bir mum oluşur.
            `,
    },
    {
        word: "Hard Cap",
        meaning: `<h4>(ÜST LİMİT)</h4><br> Bir kriptopara arzı sürecinin ulaşması
            hedeflenen en üst yatırım miktarını ifade eder.
            Belirlenmiş olan bu üst limite ulaşılması ile
            daha fazla kriptopara fonlama faaliyeti
            yürütülmez.
            `,
    },
    {
        word: "Hard Fork",
        meaning: `<h4>(SERT ÇATALLANMA)</h4><br> Blokzincirindeki tüm düğümlerin benimsemesi
            gereken aksi takdirde ağdan ayrılmasını
            gerektirecek şekillerde doğrulama kurallarında
            da değişiklik yapılmasını ifade eder. Daha
            önce doğrulanmış bir işlemi geçersiz hale
            getiren veya doğrulanmamış bir işlemi geçerli
            kılan teknik değişikliği ifade eder.
            `,
    },
    {
        word: "Hardware Wallet",
        meaning: `<h4>(DONANIM CÜZDANI)</h4><br> Kriptopara varlıklarının yönetilmesini sağlayan
            özel anahtarlar bilgilerini internete erişimi
            olmayan şifreli çiplerde saklandığı cüzdan
            türüdür. Bilgisayar veya telefonuna
            bağlayabilen ve kolay taşınabilir fiziksel
            cihazlardır.
            `,
    },
    {
        word: "Hash",
        meaning: `<h4>(KRIPTOGRAFIK ÖZET)</h4><br> Verileri rasgele bir sayı ve harf dizisine
            dönüştürmek için algoritmik bir işlem
            uygulanmasını ifade eder. Böylece,
            blokzincirine girilmek istenen veri, zincir
            içerisinde yer edinmesini sağlayan dijital bir
            parmak izi haline gelir.
            `,
    },
    {
        word: "Hash Power",
        meaning: `<h4>(İŞLEM GÜCÜ)</h4><br> Blok doğrulaması için tüm madencilerin sarf
            ettiği toplam işlemci gücünü ifade eder.
            `,
    },
    {
        word: "Hash Ribbons",
        meaning: `<h4>(HASH KURDELELERİ)</h4><br> Hash Ribbons göstergesi; yatırımcıların, belirli
            bir zaman aralığında, bir fiyat grafiğinin en
            düşük olduğu anın yani dip seviyesinin
            belirlenmesi amacıyla kullandıkları bir teknik
            analiz metodudur.
            `,
    },
    {
        word: "Hidden Cap",
        meaning: `<h4>(GİZLİ LİMİT)</h4><br> Koin arzına konu olan projenin geliştiricilerinin
            yatırımcılardan toplamayı hedefledikleri limiti ifade
            eder. Amacı, daha büyük yatırımcıların toplam
            sınırı doğru bir şekilde anlamaları ve bunun
            sonucunda da yatırımlarını ayarlamalarını
            engellemeksizin, daha küçük yatırımcıların para
            koymasına izin vererek oyun alanını eşitlemektir.
            `,
    },
    {
        word: "Hierarchical Deterministic Wallet",
        meaning: `<h4>(HİYERARŞİK BELİRLEYİCİ CÜZDAN)</h4><br> HD Wallet birden fazla kriptopara birimine ait özel
            anahtarların, tohum adı verilen 12-24 kelimelik
            anahtar kelime grubu kullanılarak oluşturulduğu
            cüzdan. Anahtar kelime grubu elinizde olduğu sürece
            özel anahtarlarınıza ulaşabilir, kripto varlıklarınızı
            başka sağlayıcıların cüzdanlarına taşıyabilirsiniz.
            `,
    },
    {
        word: "HODL",
        meaning: `<h4>(TUTMAK)</h4><br> Kriptopara kullanıcıları arasında "satmadan
            uzun süreyle tutmak" anlamında kullanılır.
            Tutmak anlamında gelen Hold kelimesinin
            yanlış yazımı ile ortaya çıkmıştır.
            `,
    },
    {
        word: "Hosted Wallet",
        meaning: `<h4>(SAHİPLİK CÜZDANI)</h4><br> Üçüncü kişi tarafından yönetilen ve kullanıcı
            adına kriptopara alım-satım ve saklama
            faaliyetlerinin gerçekleştirildiği cüzdanı ifade
            eder.
            `,
    },
    {
        word: "Hot Storage",
        meaning: `<h4>(SICAK DEPOLAMA)</h4><br> Kriptoparalara hızlı erişim sağlayan özel
            anahtarların çevrimiçi ortamda
            depolanmasını ifade eder.
            `,
    },
    {
        word: "Iceberg Order",
        meaning: `<h4>(BUZDAĞI EMİRLER)</h4><br> Alım satım işlemlerinde, toplam emir
            tutarının, küçük parçalara bölünerek işlemin
            tamamlanmasını ifade eder.
            `,
    },
    {
        word: "Ichimoku Cloud",
        meaning: `<h4>(ICHIMOKU BULUTU)</h4><br> Potansiyel destek ve direnç noktalarının yanı
            sıra piyasanın trend gidişatı hakkında
            kullanıcılara öngörü sağlamayı amaçlayan
            bir teknik analiz türünü ifade eder.
            `,
    },
    {
        word: "In Game Tokens",
        meaning: `<h4>(OYUN İÇİ JETONLAR)</h4><br> Oyun içerisinde seviye atlamak, karakter
            yükseltmek veya oyun içerisindeki alışverişi
            gerçekleştirmek için kullanılmaktadır.
            `,
    },
    {
        word: "Impermanent Loss",
        meaning: `<h4>(GEÇİCİ KAYIP)</h4><br> Bir kriptoparanın havuza yatırıldığı andaki
            fiyatın ve kriptoparanın güncel fiyatı ile
            arasındaki farkı ifade etmek için kullanılan bir
            kavramdır. Fiyat düşse de yükselse de geçici
            kayıp yaşanması durumu mevcuttur.
            `,
    },
    {
        word: "ICO",
        meaning: `<h4>(ÖNCÜ KOİN ARZI)</h4><br> ingilizce acilimi: <p>"Initial Coin Offering"</p> Dağıtık ağ yapısının oluşturulmasında ve/veya
            belli bir proje özelinde kripto varlık veya fiyat/
            para birimi karşılığı çıkarılan jeton aracılığıyla
            gerçekleştirilen fon toplama faaliyetlerini ifade
            eder.
            `,
    },
    {
        word: "IDO",
        meaning: `<h4>(İLK MERKEZİYETSİZ BORSA ARZI)</h4><br> ingilizce acilimi: <p>"Initial Dex Offering"</p> Yeni geliştirilmiş bir kriptopara projesi için
            merkeziyetsiz kriptopara alım satım
            platformları aracılığıyla fon toplanmasını
            ifade eder.
            `,
    },
    {
        word: "IEO",
        meaning: `<h4>(İLK BORSA ARZI)</h4><br> ingilizce acilimi: <p>"Initial Exchange Offering"</p> Yeni geliştirilmiş bir kriptopara projesi için
            merkezi kriptopara alım satım platformları
            aracılığıyla fon toplanmasını ifade eder.
            `,
    },
    {
        word: "Igo",
        meaning: `<h4>(İLK OYUN ARZI)</h4><br> ingilizce acilimi: <p>"Initial Game Offering"</p> Kullanıcıların blokzinciri tabanlı oyun
            projelerinin jetonlarına ve oyun içi eşyalarına
            erken erişmesini sağlamaktadır. Bu sayede,
            geliştirici şirket veya kişiler tarafından
            projelerinin devamlılığı ve sürdürülebilirliği için
            sermaye toplanmaktadır.
            `,
    },
    {
        word: "IPO",
        meaning: `<h4>(HALKA İLK ARZ)</h4><br> ingilizce acilimi: <p>"Initial Public Offering"</p> Özel şirketlerin yatırım sermayesini artırmak
            için hisse senetlerini halka ilk defa arza
            edilişini ifade eder.
            `,
    },
    {
        word: "ITO",
        meaning: `<h4>(ÖNCÜ JETON ARZI)</h4><br> ingilizce acilimi: <p>"Initial Token Offering"</p> Ethereum üzerinde gerçekleştirilen joten arzını
            ifade eder. İşlev olarak öncü koin arzı ICO) ile
            hemen hemen aynı olsa da Ethereum üzerinde
            gerçekleştirilen işlem çeşitliliğine dikkat çekmek
            amacıyla ayrıca isimlendirilmektedir.
            `,
    },
    {
        word: "Inflation",
        meaning: `<h4>(ENFLASYON)</h4><br> Bir para biriminin satın alma gücünün
            zayıflamasını ifade eder.
           `,
    },
    {
        word: "Inverted Hammer Candlestick",
        meaning: `<h4>(TERS ÇEKİÇ MUM FORMASYONU)</h4><br> Bir kriptopara varlığının fiyatının tepe noktadan
            sektikten sonra alçalışa geçtiği durumu ifade
            eder. Fitil gövdenin yukarısında ve gövdeden
            en az iki kat daha uzundur.
            `,
    },
    {
        word: "Input",
        meaning: `<h4>(GİRDİ)</h4><br> Transfer edeceğiniz kriptoparanın, adresinize
            nasıl geldiğini gösteren referans değeri ifade
            eder. Örneğin, cüzdanınızdan 0.5 BTC
            göndermek istediğinizde, 0.5 Bitcoin'in,
            bulunduğu adrese hangi
            adresten/adreslerden geldiği, transfer işlem
            dökümüne girdi olarak eklenir.
            `,
    },
    {
        word: "Interoperability",
        meaning: `<h4>(BİRLİKTE İŞLERLİK)</h4><br> Oyun dünyasında farklı sistemlerin bir arada
            çalışması durumunu ifade eder. Oyun
            deneyimini sağlayan donanımsal ve
            yazılımsal araçların birlikte çalışarak bu
            deneyimi zenginleştirmesidir.
            `,
    },
    {
        word: "KYC",
        meaning: `<h4>(MÜŞTERİNİ TANI)</h4><br> ingilizce acilimi: <p>"Know Your Customer"</p> Kullanıcı bilgilerinin, merkezi bir kurum
            tarafından onaylandığı bilgi doğrulama
            sistemini ifade eder.
            `,
    },
    {
        word: "KOL",
        meaning: `<h4>(KİLİT KANAAT LİDERİ)</h4><br> ingilizce acilimi: <p>"Key Opinion Leader"</p> Bir nevi sosyal medya fenomeni ya da
            “influencer” demektir. Fikir lideri gibi bir anlama
            gelir.
            `,
    },
    {
        word: "Ledger",
        meaning: `<h4>(KAYIT DEFTERİ)</h4><br> Finansal işlemlerin kayıt altına alındığı, eklenen
            kayıtların silinemediği, sadece yeni kayıtların
            eklenebildiği kayıt defterini ifade eder.
            `,
    },
    {
        word: "Lightning Network",
        meaning: `<h4>(YILDIRIM AĞI)</h4><br> Blokzinciri üzerinde çalışan ikinci katman
            ödeme protokolüdür. Aynı adrese
            yönlendirilen ödeme işlemlerinin tümünün hızı
            arttırmak ve maliyeti düşürmek amacıyla tek
            bir işlem içinde gönderilmesini sağlayan ağ
            yapısını ifade eder. Böylece, Bitcoin'in
            ölçeklenebilirlik sorununu çözeceği
            öngörülmektedir.
            `,
    },
    {
        word: "Liquidity",
        meaning: `<h4>(LİKİTİDE)</h4><br> Kriptopara alım satımında likidite, kriptopara
            alış ya da satış işlemlerinde, hedeflenen fiyatı
            değiştirmeden veya çok düşük oranlarda
            değişerek gerçekleşmesini sağlayacak
            miktardaki fonun hazır bulunmasını ifade eder.
            `,
    },
    {
        word: "Mainnet",
        meaning: `<h4>(ANA AĞ)</h4><br> Blokzinciri üzerinde katılımcıların işlemleri
            gerçekleştirebileceği, herkesin erişimine açık
            ve çalışır durumda olan ana ağı ifade eder.
            `,
    },
    {
        word: "Market Maker",
        meaning: `<h4>(PİYASA YAPICI)</h4><br> Alış fiyatının, kullanıcı tarafından bir
            kriptoparaya, güncel olan en düşük fiyatından
            daha düşük bir fiyatla alım emri vererek sahip
            olma veya güncel en yüksek fiyattan daha
            yüksek fiyata satılması durumunu ifade eder.
            `,
    },
    {
        word: "Market Taker",
        meaning: `<h4>(PİYASA ALICI)</h4><br> Alış satış fiyatının, kullanıcı tarafından
            belirlenmediği durumlarda, bir kriptoparanın
            güncel fiyatından alınması veya satılması
            durumunu ifade eder.
            `,
    },
    {
        word: "Market Order",
        meaning: `<h4>(PİYASA EMRİ)</h4><br> Kriptopara alım satım işlemlerinin, güncel
            piyasa fiyat ile gerçekleştirildiği emir türüdür.
            `,
    },
    {
        word: "Masternode",
        meaning: `<h4>(ANADÜĞÜM)</h4><br> Blokzinciri ağında işlem onaylama, işlem
            gizliliğini sağlama gibi görevleri
            gerçekleştirmek için özel olarak yetkilendirilen
            veya oylama ile seçilen tam düğümleri
            (fullnode) ifade eder.
            `,
    },
    {
        word: "Max Supply",
        meaning: `<h4>(MAKSİMUM ARZ MİKTARI)</h4><br> Kriptoparanın üretilmiş ya da üretilecek
            toplam adedini ifade eder. Üretim adedi
            sınırlandırılmış kriptoparalar daha değerli
            kabul edilir ancak bazı kriptoparalar sınırsız
            olarak üretilebilir.
            `,
    },
    {
        word: "mBTC",
        meaning: `<h4>(mBTC)</h4><br> mBTC / MiliBTC, Bitcoin'in 1000 parçasından
            birini ifade eder. (1 mBTC = 0.001 BTC).
            `,
    },
    {
        word: "Megahash",
        meaning: `<h4>(MEGA İŞLEM GÜCÜ)</h4><br> Madencilikteki işlem gücü için kullanılan ölçü
            birimidir. Donanımların güç kapasitesini
            açıklar. 1 mega işlem gücü 1.000.000 işlemci
            gücüne eşittir.
            `,
    },
    {
        word: "Merkle Root",
        meaning: `<h4>(MERKLE KÖKÜ)</h4><br> Blokzinciri bloğunda yer alan işlemlerin
            birbirleri ile eşleşerek kriptografik özetlerinin
            alınması sonucunda ortaya çıkan ve tüm
            işlemlerin kriptografik özetini (hash) içeren
            sonuncu ve benzersiz kriptografik özeti ifade
            eder.
            `,
    },
    {
        word: "Merkle Tree",
        meaning: `<h4>(MERKLE AĞACI)</h4><br> Blokzinciri bloğunda yer alan ve kriptografik
            özeti (hash) alınmış işlemlerin, tek bir
            kriptografik özet elde edilene kadar birbirleriyle
            eşlenerek kriptografik özetinin çıkarıldığı ağaç
            yapısıdır. İşlem listesinde yer alan her işlem,
            kendinden sonraki işlem ile birleştirilerek
            hash'lenir. Bu işlem, listede tek bir işlem kalana
            kadar devam eder.
            `,
    },
    {
        word: "Metaverse",
        meaning: `<h4>(ÖTE EVREN)</h4><br> Sanal gerçeklik ve artırılmış gerçeklikle
            oluşturulan dijital dünyaları ifade eder.
            Metaverse platformlarında; arsa, ev, eşya gibi
            birçok nesne sahibi olunabilir.
            `,
    },
    {
        word: "Microbitcoin",
        meaning: `<h4>(MİKROBİTCOİN )</h4><br> (μBtc) Bitcoin'in 1 Milyonluk parçasından birini ifade
            eder. (1 μBTC = 0.000001 BTC).
            `,
    },
    {
        word: "Microtransaction",
        meaning: `<h4>(MİKRO İŞLEM)</h4><br> Dijital ortamdaki bir ürün veya hizmet karşılığı
            yapılabilecek küçük tutarlı işlemleri ifade
            eder.
            `,
    },
    {
        word: "Mineable",
        meaning: `<h4>(MADENCİLİĞİ MÜMKÜN KRİPTOPARA)</h4><br> Madencilik faaliyeti ile elde edilen
            kriptoparaları ifade eder. Bu tür kriptoparalar,
            başarılı bir şekilde karışık algoritmik yapıları
            çözen madencilere teşvik mahiyetinde
            verilmektedir, bunun karşılığında ise işlemler
            onaylanır ve böylece yeni oluşturulan blok,
            zincire eklenir.
            `,
    },
    {
        word: "Miner",
        meaning: `<h4>(MADENCİ)</h4><br> Kriptopara transfer işlemlerini doğrulayan,
            doğrulama işlemi karşılığından ödül olarak
            kriptopara alan ve kriptopara üreten cihazlar
            ve bu cihazları yöneten kişiler) madenci olarak
            adlandırılır.
            `,
    },
    {
        word: "Mining",
        meaning: `<h4>(MADENCİLİK FAALİYETİ)</h4><br> Yeni kriptopara birimlerinin oluşturulması,
            blokların doğrularak zincire eklenmesi ve
            kriptopara transferlerini ifade eder.
            `,
    },
    {
        word: "Mining Pool",
        meaning: `<h4>(MADENCİLİK HAVUZU)</h4><br> Madencilerin doğrulama işlemleri için
            kullandıkları işlem güçlerini zincirin bir sonraki
            bloğunu oluşturmak üzere yönlendirdikleri ve
            ölçek ekonomisinin sağlandığı yapıyı ifade
            eder. Madencilik havuzundaki sisteme göre
            madenciler, ödülleri anlaşmalara göre
            bölüşürler.
            `,
    },
    {
        word: "Mining Reward",
        meaning: `<h4>(MADENCİLİK ÖDÜLÜ)</h4><br> Madencilik ödülü, transfer işlemlerinin
            doğrulanması sonucunda yeni üretilen
            kriptoparaların ve blokta kayıtlı transferler için
            ödenen ücretlerin toplamını ifade eder.
            `,
    },
    {
        word: "Mining Gear",
        meaning: `<h4>(MADENCİLİK DONANIMI)</h4><br> Madencilik için kullanılan bilgisayar türünü ve
            bilgisayar donanımını ifade eder. Bu donanım
            sadece madencilik faaliyeti yapmak amacıyla
            bir araya getirilmiş olabileceği gibi zaman
            zaman madencilik yapmak üzere çalıştırılıyor
            da olabilir.
            `,
    },
    {
        word: "Mint",
        meaning: `<h4>(MADENCİLİK DONANIMI)</h4><br> Madencilik için kullanılan bilgisayar türünü ve
            bilgisayar donanımını ifade eder. Bu donanım
            sadece madencilik faaliyeti yapmak amacıyla
            bir araya getirilmiş olabileceği gibi zaman
            zaman madencilik yapmak üzere çalıştırılıyor
            da olabilir.
            `,
    },
    {
        word: "Mixing Service",
        meaning: `<h4>(KARIŞTIRMA İŞLEMİ)</h4><br> Kriptopara birimlerinin kime ait olduğunun ve
            ne gibi işlemlerin yapıldığının takibini
            zorlaştıracak şekilde transfer edilen
            kriptoparaların adreslerini diğer işlemlerle
            karıştırılmasını ifade eder.
            `,
    },
    {
        word: "tumbler",
        meaning: `<h4>(KARIŞTIRMA İŞLEMİ)</h4><br> Kriptopara birimlerinin kime ait olduğunun ve
            ne gibi işlemlerin yapıldığının takibini
            zorlaştıracak şekilde transfer edilen
            kriptoparaların adreslerini diğer işlemlerle
            karıştırılmasını ifade eder.
            `,
    },
    {
        word: "Mnemonic Phrase",
        meaning: `<h4>(ANIMSATICI İFADE)</h4><br> Kriptopara cüzdanlarını ve içerisinde yer alan
            varlıkları güvende tutmak amacıyla
            gerektiğinde cüzdandaki fonların başka bir
            cüzdana aktarılmasını sağlayan sıralı kelime
            grubunu ifade eder.
            `,
    },
    {
        word: "Moderators",
        meaning: `<h4>(MODERATÖRLER; MODLAR)</h4><br> Telegram ve Discord kanallarında sıkça
            karşılaşabileceğimiz bu kısaltma, kanallarda
            moderatörlük ve adminlik gibi görevler
            yaparak düzeni sağlayan insanlar için
            kullanılır.
            `,
    },
    {
        word: "Move to Earn",
        meaning: `<h4>(HAREKET EDEREK KAZAN)</h4><br> (M2E) GPS takibi ve hareket sensörleri ile edilen
            hareketlerin algılanması sonucu koin (coin),
            jeton (token) veya NFT gibi yollarla
            kullanıcıların kazanç elde etmesini amaçlayan
            sistemdir.
            `,
    },
    {
        word: "Multi Signature",
        meaning: `<h4>(ÇOKLU İMZA)</h4><br> (Multisig) Ek güvenlik katmanı sağlamak amacıyla
            kriptopara transferlerinde bir işleminin
            yetkilendirilmesini sağlamak için birden fazla
            anahtarın kullanılmasını gerektiren işlemleri
            ifade eder.
            `,
    },
    {
        word: "Multisig",
        meaning: `<h4>(ÇOKLU İMZA)</h4><br> (Multi Signature) Ek güvenlik katmanı sağlamak amacıyla
            kriptopara transferlerinde bir işleminin
            yetkilendirilmesini sağlamak için birden fazla
            anahtarın kullanılmasını gerektiren işlemleri
            ifade eder.
            `,
    },
    {
        word: "Network",
        meaning: `<h4>(AĞ)</h4><br> Blokzincirin bağlı olduğu veri transfer ağını
            ifade eder.
            `,
    },
    {
        word: "No-Coiner",
        meaning: `<h4>(KRİPTOPARA KARŞITI)</h4><br> Portföyünde kriptopara birimi olmayan ve
            genel olarak kriptopara biriminin başarısız
            olacağına inanan kişileri tanımlamak için
            kullanılır.
            `,
    },
    {
        word: "Node",
        meaning: `<h4>(DÜĞÜM)</h4><br> Bir blokzincirindeki katılımcı tarafından işletilen
            defterin kopyasını ifade eder. Kriptopara
            blokzinciri ağlarında, düğümlerin işlem onayı
            yetkisi yokken, bazı ağlarda düşük işlemci
            gücü tüketimi nedeniyle düğümler işlem onayı
            yapabilmektedir.
            `,
    },
    {
        word: "Non Custodial",
        meaning: `<h4>(VESAYETSİZ)</h4><br> Kriptopara cüzdanlarının özel anahtarlarını
            ve buna tanınan tüm yetkilerinin yalnızca
            kullanıcıda olmasını ifade eder.
            `,
    },
    {
        word: "Non Custodial wallet",
        meaning: `<h4>(GÖZETİMSİZ CÜZDAN)</h4><br> Bir kriptopara cüzdanının tüm sorumluluğunun
            ve kontrolünün kullanıcının elinde olduğu bir
            cüzdan türüdür. Bu cüzdanda bilgiler aracısız
            bir şekilde saklanmaktadır.
            `,
    },
    {
        word: "nft",
        meaning: `<h4>(BENZERSİZ JETON)</h4><br> ingilizce acilimi: <p>"Non Fungible Token"</p> NFT’ler, gerçek dünyada yer alan nesneleri
            temsil eden dijital varlıkları ifade eder.
            `,
    },
    {
        word: "Non Fungible Token",
        meaning: `<h4>(BENZERSİZ JETON)</h4><br>  NFT’ler, gerçek dünyada yer alan nesneleri
            temsil eden dijital varlıkları ifade eder.
            `,
    },
    {
        word: "Noob",
        meaning: `<h4>(ACEMİ)</h4><br>  Bir oyuna henüz yeni başlamış ve iyi
            oynayamayan ya da kripto para
            ekosistemine yeni girmiş ve ne yapacağını
            tam bilemeyen yatırımcılar birer noob’dur!.
            `,
    },
    {
        word: "Original Gangster",
        meaning: `<h4>(ORJİNAL HAYDUT)</h4><br>  Ekosistemde yer alan orijinal ve saygı duyulan
            kişiler için kullanılır. Onlar hem “cool”dur hem
            de ne yaptıklarını iyi bilirler, iyi birer yatırımcı
            ve girişimcilerdir.
            `,
    },
    {
        word: "OG",
        meaning: `<h4>(ORJİNAL HAYDUT)</h4><br>  ingilizce acilimi: <p>"Original Gangster"</p> Ekosistemde yer alan orijinal ve saygı duyulan
            kişiler için kullanılır. Onlar hem “cool”dur hem
            de ne yaptıklarını iyi bilirler, iyi birer yatırımcı
            ve girişimcilerdir.
            `,
    },
    {
        word: "Offchain Transaction",
        meaning: `<h4>(ZİNCİR DIŞI TRANSFER)</h4><br>  Blokzinciri ağına yazılmayan ve paralel
            blokzinciri ağı (Liquid, Ligthing vb.) üzerinde
            gerçekleştirilen transfer işlemlerini ifade eder.
            `,
    },
    {
        word: "Offline Storage",
        meaning: `<h4>(ÇEVRİMDIŞI DEPOLAMA)</h4><br>  Çevrimdışı ortamda USB sürücüsü, veri
            depolama ortamı gibi fiziki güvenli saklama
            ortamında) gerçekleşen kriptopara saklama
            faaliyetlerini ifade eder.
            `,
    },
    {
        word: "Orphan Block",
        meaning: `<h4>(ESKİMIŞ/REDDEDİLMİŞ BLOK)</h4><br>  Orphan/Stale Block, doğrulanan ancak
            blokzincirine kabul edilmeyen blokları
            tanımlamak için kullanılır. Aynı verileri içeren
            başka bir blok daha önce onaylandığında,
            daha sonra gelen blok reddedilir ve
            blokzincirine dahil edilmez.
            `,
    },
    {
        word: "Output",
        meaning: `<h4>(ÇIKTI)</h4><br>  Transfer edilen kriptopara miktarının, hangi
            adres(ler)e gönderileceği, kriptopara
            transferine çıktı olarak eklenir. Çıktı da girdi
            gibi referans olarak gösterilir.
            `,
    },
    {
        word: "otc",
        meaning: `<h4>(TEZGAH ÜSTÜ İŞLEMLER)</h4><br> ingilizce acilimi: <p>"Over the Counter"</p> Organize olmamış piyasalarda gerçekleşen
            işlemlerdir. Tezgah üstü piyasalarda işlemler,
            alıcı ile satıcı arasında telefon, internet gibi
            araçlar ile gerçekleştirilir.
            `,
    },
    {
        word: "Over the Counter",
        meaning: `<h4>(TEZGAH ÜSTÜ İŞLEMLER)</h4><br> <p>"(OTC)"</p> Organize olmamış piyasalarda gerçekleşen
            işlemlerdir. Tezgah üstü piyasalarda işlemler,
            alıcı ile satıcı arasında telefon, internet gibi
            araçlar ile gerçekleştirilir.
            `,
    },
    {
        word: "Paper Wallet",
        meaning: `<h4>(KAĞIT CÜZDAN)</h4><br> Kriptoparaların herhangi bir dijital ortama
            ihtiyaç duymaksızın özel adres/açık adresinin
            okunabilmesine imkanimkân sağlayan QR
            koduyla birlikte yer aldığı fiziki belgeyi ifade
            eder.
            `,
    },
    {
        word: "Parabolic SAR",
        meaning: `<h4>(PARABOLIK SAR)</h4><br> SAR:" Stop and Return". Bir kriptoparanın kısa vadeli
            hareketlerinin incelendiği bir teknik analiz
            indikatörüdür.
            `,
    },
    {
        word: "Pay Per Last N Shares",
        meaning: `<h4>(SON N PAY BAŞINA ÖDEME)</h4><br> Madencilerin kazdıkları son bloktan
            başlanarak geriye doğru giden N sayısı göz
            önünde bulundurularak ödüllendirildiği
            sistemi ifade eder. Madencilik havuzu
            kapsamında kullanılan bir kavramdır.
            `,
    },
    {
        word: "Pay-Per-Last-N-Shares",
        meaning: `<h4>(SON N PAY BAŞINA ÖDEME)</h4><br> Madencilerin kazdıkları son bloktan
            başlanarak geriye doğru giden N sayısı göz
            önünde bulundurularak ödüllendirildiği
            sistemi ifade eder. Madencilik havuzu
            kapsamında kullanılan bir kavramdır.
            `,
    },
    {
        word: "Pay-Per-Share",
        meaning: `<h4>(PAY BAŞINA ÖDEME)</h4><br> Madencilerin dahil oldukları maden
            havuzunun sağladığı pay doğrultusunda
            onlara ödenen sabit ödül miktarını ifade
            eder. Madencilerin bu alması için blok bulup
            bulmamaları önemli değildir. Bir madencilik
            havuzunda bulunan herkese bu sabit pay
            ödenir.
            `,
    },
    {
        word: "Pay Per Share",
        meaning: `<h4>(PAY BAŞINA ÖDEME)</h4><br> Madencilerin dahil oldukları maden
            havuzunun sağladığı pay doğrultusunda
            onlara ödenen sabit ödül miktarını ifade
            eder. Madencilerin bu alması için blok bulup
            bulmamaları önemli değildir. Bir madencilik
            havuzunda bulunan herkese bu sabit pay
            ödenir.
            `,
    },
    {
        word: "P2P",
        meaning: `<h4>(EŞLER ARASI)</h4><br> Merkezi bir sunucuya ihtiyaç olmaksızın
            blokzinciri ağı üzerindeki düğümler arasında
            doğrudan gerçekleşen veri paylaşımı ile
            ortaya çıkan dağıtık ağ yapısını ifade eder.
            `,
    },
    {
        word: "Peer To Peer",
        meaning: `<h4>(EŞLER ARASI)</h4><br> Merkezi bir sunucuya ihtiyaç olmaksızın
            blokzinciri ağı üzerindeki düğümler arasında
            doğrudan gerçekleşen veri paylaşımı ile
            ortaya çıkan dağıtık ağ yapısını ifade eder.
            `,
    },
    {
        word: "Permissioned Ledger",
        meaning: `<h4>(İZİNLİ KAYIT DEFTERİ)</h4><br> Belirli koşulları taşıyan katılımcılara erişim izni
            ve kayıt yetkisi veren blokzinciri defterini
            ifade eder.
            `,
    },
    {
        word: "P2E",
        meaning: `<h4>(KAZANMAK İÇİN OYNA)</h4><br> ingilizce acilimi: <p>"Play to Earn"</p> Masaüstü veya mobil cihazlarda, oyun
            oynayarak çeşitli ödüllerin kazanıldığı oyun
            modelini ifade eder.
            `,
    },
    {
        word: "Play to Earn",
        meaning: `<h4>(KAZANMAK İÇİN OYNA)</h4><br> Masaüstü veya mobil cihazlarda, oyun
            oynayarak çeşitli ödüllerin kazanıldığı oyun
            modelini ifade eder.
            `,
    },
    {
        word: "Pre Mine",
        meaning: `<h4>(ÖNCEDEN KAZILMIŞ)</h4><br> Piyasada kriptopara işlemleri başlamadan
            çok önce yazılım ekibi tarafından üretilen ve
            kaynak kod diğer madencilere dağıtılmadan
            önce blokzinciri geliştiricileri tarafından bir
            adrese/cüzdana dağıtılan miktarı ifade
            eder.
            `,
    },
    {
        word: "Private Blockchain",
        meaning: `<h4>(KAPALI BLOKZİNCİR)</h4><br> Sadece izin verilen katılımcıların erişmine açık
            olan ve izne bağlı olarak mutabakat
            sağlanan blokzincirini ifade eder.
            `,
    },
    {
        word: "Private Key",
        meaning: `<h4>(ÖZEL ANAHTAR)</h4><br> Cüzdanda yer alan kriptoparaların
            kullanılabilmesi için ihtiyaç duyulan ve
            kriptopara adreslerinin sahipliğini garanti
            altına alan gizli ve özel anahtarları ifade
            eder. Üretilen her bir genel adresin özel
            anahtarı da bulunmaktadır ve yapılan
            işlemler özel anahtarlar yoluyla şifrelenerek
            ağa gönderilir.
            `,
    },
    {
        word: "PFP",
        meaning: `<h4>(ÖZEL ANAHTAR)</h4><br> ingilizce acilimi: <p>"Profile Picture"</p> Özellikle artan NFT furyasından sonra birçok
            insanın profil resimlerine satın aldıkları
            NFT’leri koyduklarına şahit oluyoruz. Bir
            yerlerde PFP ifadesini görürseniz bilin ki
            orada profil resminden bahsediliyor.
            `,
    },
    {
        word: "PoA",
        meaning: `<h4>(YETKİ İSPATI)</h4><br> ingilizce acilimi: <p>"Proof Of Authority"</p> Blokzincirindeki işlem bloklarının
            doğrulanması için kullanıcıların kimlik ve
            itibarlarını kullandıkları alternatif bir protokol
            türünü ifade eder.
            `,
    },
    {
        word: "Proof Of Authority",
        meaning: `<h4>(YETKİ İSPATI)</h4><br> <p>"POA"</p> Blokzincirindeki işlem bloklarının
            doğrulanması için kullanıcıların kimlik ve
            itibarlarını kullandıkları alternatif bir protokol
            türünü ifade eder.
            `,
    },
    {
        word: "Pob",
        meaning: `<h4>(YAKIM İSPATI)</h4><br> ingilizce acilimi: <p>"Proof Of Burn"</p> Blokzinciri üzerindeki madencilerin, sahip
            oldukları kriptoparaları yakarak blokları
            oluşturdukları protokolü ifade eder.
            `,
    },
    {
        word: "Proof Of Burn",
        meaning: `<h4>(YAKIM İSPATI)</h4><br> <p>"POB"</p> Blokzinciri üzerindeki madencilerin, sahip
            oldukları kriptoparaları yakarak blokları
            oluşturdukları protokolü ifade eder.
            `,
    },
    {
        word: "PoH",
        meaning: `<h4>(TARİH İSPATI)</h4><br> ingilizce acilimi:<p>"Proof Of History"</p> Blokzinciri üzerindeki işlemlerin tarihsel sırası ile
            doğrulandığı, doğrulanan işlemlerin arasında
            geçen zamanı kaydederek işlemlerin doğru bir
            şekilde ilerleyip ilerlemediğini kontrol eden
            protokolü ifade eder.
            `,
    },
    {
        word: "Proof Of History",
        meaning: `<h4>(TARİH İSPATI)</h4><br> <p>"POH"</p> Blokzinciri üzerindeki işlemlerin tarihsel sırası ile
            doğrulandığı, doğrulanan işlemlerin arasında
            geçen zamanı kaydederek işlemlerin doğru bir
            şekilde ilerleyip ilerlemediğini kontrol eden
            protokolü ifade eder.
            `,
    },
    {
        word: "Pos",
        meaning: `<h4>(PAY İSPATI)</h4><br> ingilizce acilimi: <p>"Proof Of Stake"</p> Blokzinciri üzerindeki katılımcıların sahip
            oldukları kriptopara miktarına göre yeni
            işlemlerin doğrulandığı blokzincirine yeni zincir
            ekleme ve böylece yeni token kazanma
            imkanıimkânı tanıyan mekanizmayı ifade eder.
            `,
    },
    {
        word: "Proof Of Stake",
        meaning: `<h4>(PAY İSPATI)</h4><br> <p>"POS"</p> Blokzinciri üzerindeki katılımcıların sahip
            oldukları kriptopara miktarına göre yeni
            işlemlerin doğrulandığı blokzincirine yeni zincir
            ekleme ve böylece yeni token kazanma
            imkanıimkânı tanıyan mekanizmayı ifade eder.
            `,
    },
    {
        word: "Pow",
        meaning: `<h4>(İŞ İSPATI)</h4><br> ingilizce acilimi: <p>"Proof Of Work"</p> Yapılan işlem doğrulamalarından, cüzdanda
            bulunan kriptopara miktarının üretilmiş
            toplam kriptopara oranında pay kazanılan
            kriptopara madencilik çeşidini ifade eder.
            `,
    },
    {
        word: "Proof Of Work",
        meaning: `<h4>(İŞ İSPATI)</h4><br> <p>"POW"</p> Yapılan işlem doğrulamalarından, cüzdanda
            bulunan kriptopara miktarının üretilmiş
            toplam kriptopara oranında pay kazanılan
            kriptopara madencilik çeşidini ifade eder.
            `,
    },
    {
        word: "Protocol",
        meaning: `<h4>(PROTOKOL)</h4><br>  Bir ağdaki etkileşimleri tanımlayan, genellikle
            fikir birliği, işlem doğrulaması ve ağa katılım
            şartlarını içeren kuralları ifade eder.
            `,
    },
    {
        word: "Public Address",
        meaning: `<h4>(AÇIK ADRES)</h4><br>  Özel anahtarların aksine, herhangi bir yerde
            paylaşılabilecek bir bilgi niteliğindeki adresleri
            ifade eder.
            `,
    },
    {
        word: "Public Blockchain",
        meaning: `<h4>(AÇIK BLOKZİNCİR)</h4><br>  Herkesin erişimine ve katılımına açık, tüm
            katılımcıların eşit haklara sahip olduğu
            blokzincirini ifade eder.
            `,
    },
    {
        word: "Public Key",
        meaning: `<h4>(AÇIK ANAHTAR)</h4><br>  Kriptoparaların alım – satımı ve
            depolanmasını gerçekleştirmek üzere
            cüzdanların ürettiği, tüm katılımcılarla
            paylaşılan adresi ve bu adresi oluşturan
            benzersiz kriptografik kod kümesini ifade eder.
            `,
    },
    {
        word: "Pump",
        meaning: `<h4>(ANİ FİYAT ARTIŞI)</h4><br>  Kriptopara fiyatının kısa zaman dilimi
            içerisinde, rutin piyasa hareketlerinin aksine
            hızla yükselmesini ifade eder.
            `,
    },
    {
        word: "PvE",
        meaning: `<h4>(OYUNCUYA KARŞI ÇEVRE)</h4><br> ingilizce acilimi:<p>"Player vs. Environment"</p> Oyuncuların yapay zekaya karşı oynadığı
            durumu tanımlamak için kullanılır. Tek başına
            veya gruplar halinde bilgisayara karşı
            oynanan oyunları içerirr.
            `,
    },
    {
        word: "Player vs Environment",
        meaning: `<h4>(OYUNCUYA KARŞI ÇEVRE)</h4><br> <p>"PVE"</p> Oyuncuların yapay zekaya karşı oynadığı
            durumu tanımlamak için kullanılır. Tek başına
            veya gruplar halinde bilgisayara karşı
            oynanan oyunları içerirr.
            `,
    },
    {
        word: "PvP",
        meaning: `<h4>(OYUNCUYA KARŞI OYUNCU)</h4><br> ingilizce acilimi:<p>"Player vs. Player"</p> Bir veya birden fazla oyuncuya karşı oyun
            oynanması durumunu ifade eder. Özellikle
            çevrimiçi oyunlarda sıklıkla kullanılan bir
            kavramdır.
            `,
    },
    {
        word: "Player vs Player",
        meaning: `<h4>(OYUNCUYA KARŞI OYUNCU)</h4><br> <p>"PVP"</p> Bir veya birden fazla oyuncuya karşı oyun
            oynanması durumunu ifade eder. Özellikle
            çevrimiçi oyunlarda sıklıkla kullanılan bir
            kavramdır.
            `,
    },
    {
        word: "QR Code",
        meaning: `<h4>(KAREKOD)</h4><br> ingilizce acilimi:<p>"Quick Response Code"</p> Barındırdığı yazılımın kamera aracılığıyla
            işlenerek okunmasını sağlayan veri dizisini
            temsil eden tek renkli bir desenden oluşan ikiboyutlu
            grafik bloğunu ifade eder.
            `,
    },
    {
        word: "Reckt",
        meaning: `<h4>(HARAP OLMAK)</h4><br> Sahip olduğu Bitcoin veya kriptoparaları hatalı
            alım satım stratejisi ile alt üst olan
            kullanıcıların kullandığı bir terimdir.
            `,
    },
    {
        word: "RSI",
        meaning: `<h4>(GÖRECELİ GÜÇ ENDEKSİ)</h4><br> ingilizce acilimi:<p>"Relative Strength Index"</p> Bir finansal varlığın alım satım hareketlerinin
            incelendiği bir momentum teknik analiz
            indikatörüdür.
            `,
    },
    {
        word: "Relative Strength Index",
        meaning: `<h4>(GÖRECELİ GÜÇ ENDEKSİ)</h4><br> <p>"RSI"</p> Bir finansal varlığın alım satım hareketlerinin
            incelendiği bir momentum teknik analiz
            indikatörüdür.
            `,
    },
    {
        word: "Replicated Ledger",
        meaning: `<h4>(KAYIT DEFTERİ KOPYASI)</h4><br> Bir ağda yer alan kayıt defterlerinin güncel
            kopyasını ifade eder.
            `,
    },
    {
        word: "Resistance",
        meaning: `<h4>(DİRENÇ)</h4><br> Teknik analizde kullanılan bir kavramdır.
            Yükselerek seyreden bir grafikte yükselişin son
            bulduğu noktadır. Direnç noktasına ulaşıldığı
            zaman fiyatların daha fazla yükselmesi
            beklenmez.
            `,
    },
    {
        word: "Retest",
        meaning: `<h4>(YENİDEN TEST ETME)</h4><br> Bir kriptopara varlık grafiğinin, destek veya
            direnç noktalarında kırıldıktan sonra grafiğin
            yeniden aynı noktaya temas etmesini ifade
            ede. Teknik analizde kullanılan bir kavramdır.
            `,
    },
    {
        word: "ROI",
        meaning: `<h4>(YATIRIMIN GERİ DÖNÜŞÜ)</h4><br> ingilizce acilimi:<p>"Return of Investment"</p> Kriptopara madenciliği yapmak için donanım
            satın alma, altyapı, elektrik, soğutma
            maliyetleri ve işletme giderlerini de içeren
            maliyetlerin tamamının (ana paranın),
            kriptopara madenciliğinden elde edilen gelir
            ile geri kazanıldığı süreyi ifade eder.
            `,
    },
    {
        word: "Return of Investment",
        meaning: `<h4>(YATIRIMIN GERİ DÖNÜŞÜ)</h4><br> <p>"ROI"</p> Kriptopara madenciliği yapmak için donanım
            satın alma, altyapı, elektrik, soğutma
            maliyetleri ve işletme giderlerini de içeren
            maliyetlerin tamamının (ana paranın),
            kriptopara madenciliğinden elde edilen gelir
            ile geri kazanıldığı süreyi ifade eder.
            `,
    },
    {
        word: "RUG PULL",
        meaning: `<h4>(KİLİM ÇEKME)</h4><br> Bir kripto para ya da NFT projesinin sahibi
            yatırımcılardan gelen fonları alıp ortadan
            kaybolduğunda buna rug ya da rug pull
            denir.
            `,
    },
    {
        word: "Satoshi Nakamoto",
        meaning: `<h4>()</h4><br> Bitcoin teknik dokümanını yayınlayan ve ilk blokzincirini
            oluşturan, kimliği belirsiz kişi ya da kişiler. Dokümanın ve
            ilk blokzincirin Satoshi Nakamoto takma adıyla var
            olması, Bitcoin'in sahibi ve merkezi olmayan bir
            kriptopara olarak tanımlanmasına neden olmuştur.
            `,
    },
    {
        word: "Sats",
        meaning: `<h4>(SATOSHI)</h4><br> 100 milyon parçaya bölünebilen Bitcoin'in en
            küçük birimini ifade eder. Örn. Türk Lirası için
            kullandığımız Kuruş'un Bitcoin için karşılığı
            Satoshi'dir.
            `,
    },
    {
        word: "Satoshi",
        meaning: `<h4>(SATOSHI)</h4><br> 100 milyon parçaya bölünebilen Bitcoin'in en
            küçük birimini ifade eder. Örn. Türk Lirası için
            kullandığımız Kuruş'un Bitcoin için karşılığı
            Satoshi'dir.
            `,
    },
    {
        word: "Scam",
        meaning: `<h4>(SAHTEKARLIK)</h4><br> Çevrimiçi ortamlarda, sahtekarlık ve
            dolandırıcılık amaçlı yapılan girişimleri ifade
            eder. Scam amacı olan kişiler; kullanıcıların
            bilgilerini kişisel çıkarları doğrultusunda ele
            geçirmeye çalışabilir.
            `,
    },
    {
        word: "Scam Coin",
        meaning: `<h4>(SAHTE COİN)</h4><br> Dolandırıcılık amaçlı oluşturulan
            kriptoparalardır. Kar yaptıktan sonra
            manipüle edilip bir anda yok olurlar.
            Kriptoparalar hakkında detaylı araştırma
            yaparak bu tarz kötü amaçlı girişimlerden
            korunmak mümkündür.
            `,
    },
    {
        word: "Second Layer Solutions",
        meaning: `<h4>(İKİNCİ KATMAN CÖZÜMLERİ)</h4><br> Özellikle mikro ödemeler için blokzincirin
            ölçeklenebilirlik ve verimlilik sorunlarını çözmek
            amacıyla ana zincire paralel olarak çalışan
            blokzincirleri ifade eder.
            `,
    },
    {
        word: "L2 Solutions",
        meaning: `<h4>(İKİNCİ KATMAN CÖZÜMLERİ)</h4><br> Özellikle mikro ödemeler için blokzincirin
            ölçeklenebilirlik ve verimlilik sorunlarını çözmek
            amacıyla ana zincire paralel olarak çalışan
            blokzincirleri ifade eder.
            `,
    },
    {
        word: "Security Token",
        meaning: `<h4>(MENKUL KIYMET JETONU)</h4><br> Bir finansal değere sahip olan, geleneksel
            finans sisteminde yer alan varlıkların blokzinciri
            üzerinde çalıştığı jeton türünü ifade eder.
            `,
    },
    {
        word: "SEED",
        meaning: `<h4>(ANAHTAR KELİME)</h4><br> Kriptopara cüzdanlarının kriptopara
            adreslerini üretirken kullandığı 2048 kelime
            arasından rastgele seçilen 12-24 kelimelik
            özel anahtarı ve cüzdanın başlangıç noktasını
            ifade eder.
            `,
    },
    {
        word: "Segwit",
        meaning: `<h4>(AYRILMIŞ TANIK)</h4><br> ingilizce acilimi: <p>"Segregated Witness"</p> Bitcoin kullanıcılarının artması sebebiyle işlem
            ücretlerinin maliyetlerini düşürmek ve daha
            kısa sürede doğrulama gerçekleştirebilmek
            amacıyla 1 Ağustos 2017 tarihinde Bitcoin
            blokzincirinde gerçekleştirilen teknik değişikliği
            ifade eder.
            `,
    },
    {
        word: "Segregated Witness",
        meaning: `<h4>(AYRILMIŞ TANIK)</h4><br> <p>"Segwit"</p> Bitcoin kullanıcılarının artması sebebiyle işlem
            ücretlerinin maliyetlerini düşürmek ve daha
            kısa sürede doğrulama gerçekleştirebilmek
            amacıyla 1 Ağustos 2017 tarihinde Bitcoin
            blokzincirinde gerçekleştirilen teknik değişikliği
            ifade eder.
            `,
    },
    {
        word: "Selfish Mining",
        meaning: `<h4>(BENCİL MADENCİLİK)</h4><br> Madencilerin blokzincirine kattıkları blokları
            diğer madencilerden gizleyerek kar etmeyi
            amaçladıkları stratejiyi ifade ederr.
            `,
    },
    {
        word: "Sentiment Analysis",
        meaning: `<h4>(DUYGUSAL ANALİZ)</h4><br> Toplulukların bir konu hakkındaki genel
            tutumunu inceleyen yaklaşımı ifade eder.
            Duygu analizi, bireylerin fikir ve görüşlerinden
            alınan verilerin, özel yazılımlarla ölçülmesi ile
            hesaplanır.
            `,
    },
    {
        word: "SHA 256",
        meaning: `<h4>(256 BİTLİK GÜVENLİ KRİPTOGRAFİK ÖZET ALGORİTMASİ)</h4><br> ABD Ulusal Güvenlik Birimi ( NSA) tarafından
            geliştirilen "Güvenli Kriptografik Özet
            Algoritması" temelli kriptografik veri şifreleme
            yöntemini ifade eder.
            `,
    },
    {
        word: "Shill",
        meaning: `<h4>(YEM)</h4><br> Kriptopara dünyasında bir çıkar karşılığında
            bir kriptopara veya jetonu her ortamda
            konuşmak, abartılı bir tanıtım yaparak
            piyasayı karıştırmak anlamında kullanılan bir
            kavramdır.
            `,
    },
    {
        word: "Side Chain",
        meaning: `<h4>(YAN ZİNCİR)</h4><br> Ana zincirle paralel olarak çalışan, ana zincirle
            yan zincir arasında transfer yapılabilmesine
            olanak sağlayan protokol blokzincirini ifade eder.
            ikinci katman blokzincir çözümlerinin bir
            parçasıdır.
            `,
    },
    {
        word: "Smart Contract",
        meaning: `<h4>(AKILLI SÖZLEŞME)</h4><br> Blokzinciri ağı üzerinde yer alan veriler üzerinde
            sınırları önceden belirlenen bir akış içerisinde işlem
            yapılmasını sağlayan ve güvenli bir bilgisayar ağı
            tarafından doğrulanan merkezi olmayan platformu
            ifade etmektedir. Hukuki bağlayıcılık taşımayan akıllı
            sözleşmeler, tarafların zincirin içeriği hakkında
            anlaşarak kriptografik olarak imzalanmasıyla
            blokzinciri ağına yüklenmektedir.
            `,
    },
    {
        word: "Soft Fork",
        meaning: `<h4>(YUMUŞAK ÇATALLANMA)</h4><br> Madencilerin yazılımlarını yükseltmesini
            gerektiren ve zincirde önceden geçerli olan
            işlemlerin geçersiz kılındığı zorunlu olmayan
            teknik değişikliği ifade eder.
            `,
    },
    {
        word: "Softcap",
        meaning: `<h4>(ALT LİMİT)</h4><br> Koin arzı sürecinde bir yatırımcıdan
            alınabilecek en düşük yatırım limitini ifade
            eder. Belirlenmiş olan alt limit sağlanmadığı
            sürece öncü coin koin arzı gerçekleştirilemez.
            `,
    },
    {
        word: "Stable Coin",
        meaning: `<h4>(STABİL KRİPTOPARA)</h4><br> Üreticisi tarafından karşılığında 1:1 oranında itibari
            para rezervi tutulan ve kriptopara alım satım
            platformlarında USD, EUR, GBP, JPY vb para birimleri
            yerine kullanılan kriptoparalar. Örn. USDT Tether), Pax
            Paxos Standart), TUSD True USD) vb.) Ancak alım
            satım platformlarındaki işlem komisyonları nedeniyle
            bu kriptoparaların fiyatları 1 birim üzerinde ya da
            altında olabilmektedir.
            `,
    },
    {
        word: "Staking",
        meaning: `<h4>(PAYDAŞLIK)</h4><br> Kriptoparaların satın alınarak bir süreliğine
            cüzdanda tutulması ve işlemleri doğrulamak
            için cüzdanın açık tutulmasını ifade eder.
            `,
    },
    {
        word: "Stale Block",
        meaning: `<h4>(HÜKÜMSÜZ BLOK)</h4><br> Hâlihazırda başarılı bir şekilde çözülmüş bir
            blok yapısının geçersiz kabul edilerek, tekrar
            kullanılmasının mümkün olmamasını ifade
            eder.
            `,
    },
    {
        word: "SUPPORT",
        meaning: `<h4>(DESTEK)</h4><br> Teknik analizde kullanılan bir kavramdır. Bir
            grafik üzerinde fiyatların en düşük olduğu
            noktayı ifade eder. Düşerek seyreden bir fiyat
            grafiğinin destek noktasından sonra düşmeye
            devam etmesi beklenmemektedir.
            `,
    },
    {
        word: "Symbol",
        meaning: `<h4>(KISA KOD)</h4><br> Kriptoparaların 3-4 karakterlik kısa kodları
            Bitcoin BTC, Ethereum ETH, Litecoin LTC
            vb.
            `,
    },
    {
        word: "Ticker",
        meaning: `<h4>(KISA KOD)</h4><br> Kriptoparaların 3-4 karakterlik kısa kodları
            Bitcoin BTC, Ethereum ETH, Litecoin LTC
            vb.
            `,
    },
    {
        word: "Taint",
        meaning: `<h4>(İZ ANALİZİ)</h4><br> İki farklı kriptopara adreslerinin transfer
            hareketleri incelenerek birbiriyle olan
            yakınlığının incelenmesine verilen isimdir.
            Genellikle çalıntı hesapların araştırılmasında
            kullanılan bir yöntemdir.
            `,
    },
    {
        word: "Tangle",
        meaning: `<h4>(ARAPSAÇI)</h4><br> IOTA adı verilen kriptopara tarafından
            geliştirilen ve blokzinciri teknolojisinden farklı
            olarak hiçbir işlem ücreti olmadan varlık
            transfer edilmesini sağlayan ve kullanıcılar
            tarafından doğrulamaların gerçekleştirildiği
            alternatif teknolojiyi ifade eder.
            `,
    },
    {
        word: "Technical Analysis",
        meaning: `<h4>(TEKNIK ANALIZ)</h4><br> Bir finansal varlığın, grafiğinde yer alan
            geçmiş fiyat bilgilerine bakılarak piyasaların
            gelecekte hangi yönde hareket edeceğini
            tahmin etmek için kullanılır.
            `,
    },
    {
        word: "Testnet",
        meaning: `<h4>(TEST AĞI)</h4><br> Geliştiriciler tarafından test aşamasında
            kullanılan, alternatif niteliğinde olan ve maddi
            değer taşımayan blokzincirini ifade eder.
            `,
    },
    {
        word: "Timelock",
        meaning: `<h4>(ZAMAN KİLİDİ)</h4><br> Belli bir işlemin gerçekleşmesi için belli bir
            sürenin geçmesini veya blokzincirinin belli bir
            yüksekliğe ulaşmasını gerektiren bir tür ilkel
            akıllı sözleşme modelini ifade eder.
            `,
    },
    {
        word: "Locktime",
        meaning: `<h4>(ZAMAN KİLİDİ)</h4><br> Belli bir işlemin gerçekleşmesi için belli bir
            sürenin geçmesini veya blokzincirinin belli bir
            yüksekliğe ulaşmasını gerektiren bir tür ilkel
            akıllı sözleşme modelini ifade eder.
            `,
    },
    {
        word: "Timestamp",
        meaning: `<h4>(ZAMAN DAMGASI)</h4><br> Belli bir işlemin gerçekleştiği zamanı ifade
            eden ve genellikle yıl-ay-gün-saat-dakikasaniye
            formatında belirtilen zaman bilgisini
            ifade eder.
            `,
    },
    {
        word: "To The Moon",
        meaning: `<h4>(AY'A DOGRU)</h4><br> Bitcoin veya başka bir kriptoparanın fiyatının
            aniden hızlı yükselmesini veya yeni bir zirveye
            ulaşmasını anlatmak için kullanılır.
            `,
    },
    {
        word: "TOKEN",
        meaning: `<h4>(JETON)</h4><br> Dağıtık defter teknolojisinin kriptoparalar
            haricinde bir diğer uygulama örneği olarak
            ortaya çıkmıştır. Mevcut bir blokzinciri üzerinde
            bir proje ekosistemi içerisinde belli bir değer
            veya faydayı temsil eden dijital kripto varlıkları
            ifade eder. Ethereum’un akıllı sözleşmeleri
            üzerinde üretilen projeler buna örnek olarak
            verilebilir..
            `,
    },
    {
        word: "Token Generation Event",
        meaning: `<h4>(JETON ÜRETME ETKİNLİĞİ)</h4><br> Ethereum jetonlarının oluşturulma tarihini ifade
            eder.
            `,
    },
    {
        word: "Tokenize",
        meaning: `<h4>(JETONLAŞTIRMA)</h4><br> Herhangi bir ürün veya hizmetin dijital
            dünyada dijital varlık olarak karşılığının alım –
            satım işlemlerine konu olmasını ifade eder.
            `,
    },
    {
        word: "ToR",
        meaning: `<h4>(SOĞAN YÖNLENDİRİCİSİ)</h4><br> Kullanıcının konum ve veri bilgisini gizleyerek
            anonim iletişim kurulabilmesine olanak
            sağlayan The Onion Router projesinin
            kısaltmasını ifade eder.
            `,
    },
    {
        word: "Total Supply",
        meaning: `<h4>(TOPLAM MİKTAR)</h4><br> Bir kriptoparanın piyasada işlem gören
            toplam adedini ifade eder.
            `,
    },
    {
        word: "Transaction",
        meaning: `<h4>(İŞLEM)</h4><br> Bir blokzincirinde kriptoparalar ile
            gerçekleştirilen herhangi bir işlemi ifade eder.
            `,
    },
    {
        word: "Transaction Fee",
        meaning: `<h4>(İŞLEM ÜCRETİ)</h4><br> Kriptopara transferlerinde işlemlerin güvenilir
            ve doğru bir şekilde gerçekleştirilmesini
            sağlayan madenciye işlem mukabilinde
            verilen ücreti ifade eder.
            `,
    },
    {
        word: "Transaction ID",
        meaning: `<h4>(İŞLEM KODU)</h4><br> Kriptopara transferleri gerçekleştiğinde
            oluşturulan, işlemlerin blokzincir gezginlerinde
            takip edilmesine imkân veren benzersiz kod
            kümesini ifade eder.
            `,
    },
    {
        word: "TRC 20",
        meaning: `<h4></h4><br> Tron blokzinciri üzerinde, akıllı kontratlara
            kriptopara olarak kullanılmak üzere jetonların
            entegre edilmesi için kullanılan bir jeton
            standardıdır.
            `,
    },
    {
        word: "Triangle",
        meaning: `<h4>(ÜCGEN FORMASYONU)</h4><br> Bir süre zıt yönlerde seyreden iki trend
            çizgisinin sıkışarak bir noktada birleşmesini
            ifade etmek için kullanılan bir teknik analiz
            yöntemidir. Alçalan, yükselen ve simetrik
            olmak üzere üç çeşidi bulunmaktadırr.
            `,
    },
    {
        word: "Trustless",
        meaning: `<h4>(GÜVENİLİR)</h4><br> Blokzincirinde gerçekleştirilen işlemlerin
            doğruluğunun ispatı için herhangi bir üçüncü
            kişiye ihtiyaç duyulmamasını ifade eder.
            Blokzinciri yapı itibariyle her bir
            kullanıcı/katılımcının güvenini kazanmış bir
            sistem üzerine kuruludur.
            `,
    },
    {
        word: "Unconfirmed",
        meaning: `<h4>(ONAYLANMAMIŞ)</h4><br> Bir işlemin madenci tarafından
            onaylanmamış ve blokzincirine eklenmemiş
            halini ifade eder.
            `,
    },
    {
        word: "Unpermissioned Ledger",
        meaning: `<h4>(İZNE TABİ OLMAYAN KAYİT DEFTERİ)</h4><br> Herhangi bir koşul aramaksızın herkesin
            erişimine ve işlemine açık olan blokzincir
            yapısını ifade eder.
            `,
    },
    {
        word: "UTXO",
        meaning: `<h4>(HARCANMAMIŞ İŞLEM ÇIKTISI)</h4><br> ingilizce acilimi: <p>"Unspent Transaction Output"</p> Blokzincirde gerçekleşen işlem dökümünde
            transfer edilen kriptoparanın transfer edildiği
            adresten çıkmadığını ve harcanabilir
            olduğunu ifade eder.
            `,
    },
    {
        word: "Unspent Transaction Output",
        meaning: `<h4>(HARCANMAMIŞ İŞLEM ÇIKTISI)</h4><br> <p>"UTXO"</p> Blokzincirde gerçekleşen işlem dökümünde
            transfer edilen kriptoparanın transfer edildiği
            adresten çıkmadığını ve harcanabilir
            olduğunu ifade eder.
            `,
    },
    {
        word: "Utility Token",
        meaning: `<h4>(FAYDA JETONU)</h4><br> Blokzincirinde geliştirilen bir projenin sunduğu
            hizmetlere, kullanıcıların erişim sağlaması için
            kullanılan jeton türünü ifade eder.
            `,
    },
    {
        word: "Validator",
        meaning: `<h4>(DOĞRULAYICI)</h4><br> Blokzincirinde gerçekleşen işlemlerin ‘hukuka’
            uygun ve çifte harcamaya yâda kötü niyetli
            işlemlere konu olmadığı gibi zincirin
            güvenliğine ilişkin hususlarda doğrulamakla
            görevli olan cihazı veya cihazı yöneten kişiyi
            ifade eder.
            `,
    },
    {
        word: "Vanity Address",
        meaning: `<h4>(ÖZEL ADRES)</h4><br> Kullanıcıların kendi istekleri doğrultusunda
            kendileri için kişiselleştirdikleri bitcoin veya
            kripto adreslerine özel adres denir.
            `,
    },
    {
        word: "Vires In Numeris",
        meaning: `<h4>(SAYILARIN GÜCÜ)</h4><br> Latince bir kavramdır ve Bitcoin’in mottosu
            olarak kullanılır. Bitcoin kriptografi ile şifrelenen
            dijital bir para olduğu için çeşitli rakam
            dizilerinin kullanıldığı kodlardan oluşmaktadır.
            Bu matematiksel kodlar Bitcoin için güçlü bir
            altyapı oluşturmakta ve Bitcoin'in sayılardan
            aldığı gücü sağlamaktadır.
            `,
    },
    {
        word: "VR",
        meaning: `<h4>(SANAL GERÇEKLİK)</h4><br> ingilizce acilimi:<p>"Virtual Reality"</p>Oyun sektöründe oyunların iki boyutlu
            dünyadan çıkıp üç boyutlu olarak
            deneyimlenmesini sağlar. Görme, duyma,
            dokunma, hatta koku gibi duyuları harekete
            geçiren donanımsal teknolojiler ile
            desteklenmektedir.
            `,
    },
    {
        word: "Virtual Reality",
        meaning: `<h4>(SANAL GERÇEKLİK)</h4><br> <p>"VR"</p>Oyun sektöründe oyunların iki boyutlu
            dünyadan çıkıp üç boyutlu olarak
            deneyimlenmesini sağlar. Görme, duyma,
            dokunma, hatta koku gibi duyuları harekete
            geçiren donanımsal teknolojiler ile
            desteklenmektedir.
            `,
    },
    {
        word: "Virtual Currency",
        meaning: `<h4>(SANAL PARA)</h4><br> ABD Vergi Dairesi (IRS) sanal parayı "Bir
            değişim aracı, bir hesap birimi ve / veya bir
            değer saklama aracı olarak çalışan ve
            herhangi bir yargı alanında yasal ihale
            statüsüne sahip olmayan bir değerin dijital
            temsili" olarak tanımlamaktadır.
            `,
    },
    {
        word: "Virtual Land",
        meaning: `<h4>(SANAL ARAZİ)</h4><br> Metaverse dünyasında bulunan dijital
            arazilere verilen isimdir. Alım satımı
            yapılabilmektedir ve kullanıcılara avatarları ile
            yer alabilecekleri çeşitli kullanım alanları
            sağlamaktadır.
            `,
    },
    {
        word: "Volatile",
        meaning: `<h4>(DALGALI HAREKETLİ FİYAT)</h4><br> Düzensiz olarak yükselen ve alçalan
            kriptopara fiyat hareketlerini ifade eder.
            `,
    },
    {
        word: "Volatility",
        meaning: `<h4>(YÜKSEK FİYAT HAREKETLİLİĞİ )</h4><br> Düzensiz olarak yükselen ve alçalan
            kriptopara fiyat hareketlerini ifade eder.
            `,
    },
    {
        word: "VWAP",
        meaning: `<h4>(HACİM  AĞIRLIKLI ORTALAMA FİYAT )</h4><br> ingilizce acilimi: <p>"Volume Weighted Average Price"</p>Hacim ağırlıklı ortalama, teknik analizde bir
            kriptopara varlığının belirli bir zaman dilimi
            içerisindeki hacme göre alınmış ortalama
            fiyatının bulunduğu bir gösterge olarak
            kullanılmaktadır.
            `,
    },
    {
        word: "Volume Weighted Average Price",
        meaning: `<h4>(HACİM  AĞIRLIKLI ORTALAMA FİYAT)</h4><br> <p>"VWAP"</p>Hacim ağırlıklı ortalama, teknik analizde bir
            kriptopara varlığının belirli bir zaman dilimi
            içerisindeki hacme göre alınmış ortalama
            fiyatının bulunduğu bir gösterge olarak
            kullanılmaktadır.
            `,
    },
    {
        word: "WALLET",
        meaning: `<h4>(CÜZDAN)</h4><br> Kriptoparaları depolamak için kullanılan, gizli
            anahtarları saklayan cüzdan oluşumunu ifade
            eder. Masaüstü, yazılım, donanım, kağıtkâğıt
            gibi çeşitli türleri vardır.
            `,
    },
    {
        word: "Whale",
        meaning: `<h4>(BALİNA)</h4><br> Bitcoin dünyasında da piyasaya erken giren,
            cüzdanında 1,000 ve üzeri sayıda Bitcoin’i
            olan kullanıcılarına denir. Klasik finans
            dünyasının konuşma dilinde kullanılan balina
            terimi büyük ve etkili bir yatırımcı anlamında
            kullanılır.
            `,
    },
    {
        word: "Web 3.0",
        meaning: `<h4>(İNTERNET 3.0)</h4><br> İnternetteki algoritmaların yapay zeka ile
            çalıştığı ve web üzerindeki verilerin
            merkeziyetsiz çalıştığı internet sürecini ifade
            eder.
            `,
    },
    {
        word: "Wedge",
        meaning: `<h4>(TAKOZ FORMASYONU)</h4><br> Bir kriptopara varlığının grafik üzerinde yer
            alan fiyat eğrilerinin birbirine yaklaştığı
            durumu ifade etmek için kullanılan bir teknik
            analiz türüdür. Yaklaşan çizgilerin birbiriyle
            kesişmeden formasyonun tamamlanması
            beklenir. Alçalan ve Yükselen olmak üzere iki
            adet türü vardır.
            `,
    },
    {
        word: "Whitepaper",
        meaning: `<h4>(TEKNİK DÖKÜMAN)</h4><br> Kriptopara arzında bulunan bir proje ekibinin,
            projenin teknik detaylarını ve ekip olarak
            edindikleri misyon ve vizyonu yol haritaları ile
            beraber ortaya koyan dokümanı ifade eder.
            `,
    },
    {
        word: "Yield Farming",
        meaning: `<h4>(VERİM ÇİFTLİĞİ)</h4><br> Kullanıcıların gelecekte kar etmek amacıyla
            ellerindeki kripto varlıkları ödünç vermesi veya
            bir likidite havuzuna stake etmesi durumunu
            ifade eder.
            `,
    },
    {
        word: "YOLO",
        meaning: `<h4>(YALNIZCA BIR KEZ YASIYORSUN)</h4><br> ingilizce acilimi: <p>"You Only Live Once"</p>Riskli yatırımlar yaparak olmadık yerlere
            parasını “basan” yatırımcılar YOLO!
            denir.
            `,
    },
    {
        word: "You Only Live Once",
        meaning: `<h4>(YALNIZCA BIR KEZ YASIYORSUN)</h4><br> i<p>"YOLO"</p>Riskli yatırımlar yaparak olmadık yerlere
            parasını “basan” yatırımcılar YOLO!
            denir.
            `,
    },
    {
        word: "Zero Confirmation Transaction",
        meaning: `<h4>(ONAYLANMAMIŞ İŞLEM)</h4><br> Transfer gerçekleştikten sonra işlemin henüz
            madenci tarafından onay almadığını ifade
            eder.
            `,
    },
    {
        word: "1/1 Art",
        meaning: `<h4></h4><br> Bu kavram da 1/1 gibidir ancak tek bir farkla.
            1:1 Art, bir sanatçının
            yarattığı ve CryptoPunks gibi 10 bin adet
            değil de yalnızca birkaç
            NFT’den oluşan eşsiz ve benzersiz eserlerdir.
            1/1 NFT’lere oranla 1:1
            Art NFT’lerinin değerleri çok daha yüksektir
            çünkü sayıca az ve daha
            öznel olurlar..
            `,
    },
    {
        word: "1/1",
        meaning: `<h4></h4><br> Bu bir aritmetik problem değil. 1/1 diye
            gördüğünüz şey, eşsiz ve
            benzersiz bir NFT’yi ifade ediyor. Yani bu
            ifadeyi gördüğünüzde bilin
            ki, o NFT’den yalnızca bir tane bulunuyor.
            Mesela CryptoPunks, 10
            bin adet eşsiz ve benzersiz olan (1/1)
            NFT’den oluşuyorr.
            `,
    },
];
const searchButton = document.getElementById('searchButton');
const input = document.getElementById('textInput');
const resultArea = document.querySelector('#resultContainer');
searchButton.addEventListener('click', showResult);
function showResult() {
    resultArea.innerHTML = "";
    //let text = input.value.replace(/\s+/g, '').toLowerCase();
    //let text = input.value.toLowerCase().trim();
    let text = input.value.replace(/\s+/g, '').toLowerCase();
    let results = terms.filter(term => term.word.replace(/\s+/g, '').toLowerCase() === text);
    //let results = terms.filter(terms=> terms.word.toLowerCase() === text);
    console.log('sonuclar', results);
    if (results.length === 0) {
        // Eşleşme bulunamadıysa mesaj göster
        resultArea.innerHTML = '<p>ESLESEME BULUNAMADI</p>';
    }
    else {
        // Eşleşme varsa sonuçları göster
        results.forEach(result => {
            resultArea.innerHTML += `
            <p>${result.meaning}</p>
            `;
        });
    }
}
