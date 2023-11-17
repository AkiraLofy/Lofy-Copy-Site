import scrape from 'website-scraper';
import brightGreen from 'colors';
import rainbow from 'colors';
import white from 'colors';
import PuppeteerPlugin from 'website-scraper-puppeteer';

 console.log(
    `
    


       

           ██╗      ██████╗ ███████╗██╗   ██╗     ██████╗ ██████╗ ██████╗ ██╗   ██╗
           ██║     ██╔═══██╗██╔════╝╚██╗ ██╔╝    ██╔════╝██╔═══██╗██╔══██╗╚██╗ ██╔╝
           ██║     ██║   ██║█████╗   ╚████╔╝     ██║     ██║   ██║██████╔╝ ╚████╔╝ 
           ██║     ██║   ██║██╔══╝    ╚██╔╝      ██║     ██║   ██║██╔═══╝   ╚██╔╝  
           ███████╗╚██████╔╝██║        ██║       ╚██████╗╚██████╔╝██║        ██║   
           ╚══════╝ ╚═════╝ ╚═╝        ╚═╝        ╚═════╝ ╚═════╝ ╚═╝        ╚═╝   
                                                                        
                                                                                  
                                                                                                                            
                                                                                                                                                                                
          `.rainbow
  ); 


console.log(`[!]`.brightGreen + ` Copiando site...`.white);

await scrape({
urls: ['https://lofy.gang'], /* Link do site que você quer copiar */
directory: 'pastaraiz/pastasitecopiado', /* Diretório da onde ficará os arquivos do site copiado */
plugins: [
new PuppeteerPlugin({
launchOptions: { headless: false }, /* Opcional */
scrollToBottom: { timeout: 10000, viewportN: 10 }, /* Opcional */
blockNavigation: true, /* Opcional */
})
]
});
console.log(`[!]`.brightGreen + ` Site copiado com sucesso.`.white);


/* Código feito por AkiraLofy - LofyGang*/
