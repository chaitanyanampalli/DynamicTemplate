import { LightningElement,api ,track,wire} from 'lwc';
import getVFOrigin from '@salesforce/apex/POV_Controller.getVFOrigin';
import updateArticalContent from '@salesforce/apex/templateController.updateArticleContent';
import getContent from '@salesforce/apex/POV_Controller.getContent';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS  = ['Contact.Id'];

export default class DynamicTemplate extends LightningElement {
    @api recordId;
    title = 'Article Title : Dynamic Template UI';
    editable = false;
    fileVal;
    input = false;
    message = '';
    stage;
    width;
    height;
    isText = false;
    isImage = false;
    isButton = false;
    buttonLabel = 'Button Label';
    editText = 'Edit Text';
    previewUrl = 'https://play-lh.googleusercontent.com/8zeY2rMMqLfUYBGebRWALtqxcE00WK2y43inlWRSEbjiZJs_vW1N1r4CoIF-FCQ3wvU';
    startX;
    startY;
    startWidth;
    startHeight;
    resizeElement;
    isResizing = false;
    finalWidth;
    finalHeight;
    @track containerWidth = 50;
    @track containerHeight = 50;
    target;
    @track richTextValue = '';
    vfUrl = '/apex/tinyMCE'; 
    content;
    @wire(getVFOrigin)
    vfOrigin;
    existingTemplate;
    recordIdContent;
    receivedMessage = '';
    loadTemplate = true;
    selectTemplate = false;
    @track templatePreview = '';
    isLoaded = true;
    templates = {
        template1: `
        <div>          

        <p style="line-height: 1.1;"><strong>Selected Template</strong></p>
                
        
        
        <p style="text-align: justify;line-height: 1.1;"><span style="color: rgb(0, 0, 0);"><span style="background-color: rgb(255, 255, 255);font-family: arial, helvetica, sans-serif;"><span style="background-color: rgb(230, 126, 35);"><span style="background-color: rgb(255, 255, 255);"><img height="53" src="https://chaitanya-dev-edition-dev-ed.file.force.com/sfc/servlet.shepherd/version/renditionDownload?rendition=ORIGINAL_Png&versionId=0685g00000Fd8Tv&operationContext=CHATTER&contentId=05T5g00000s6SCx" width="112" /> &nbsp;<span style="background-color: rgb(255, 255, 255);font-family: arial, helvetica, sans-serif;"><span style="background-color: rgb(230, 126, 35);"><span style="background-color: rgb(255, 255, 255);"><img height="53" src="https://chaitanya-dev-edition-dev-ed.file.force.com/sfc/servlet.shepherd/version/renditionDownload?rendition=ORIGINAL_Png&versionId=0685g00000Fd8Tv&operationContext=CHATTER&contentId=05T5g00000s6SCx" width="112" /></span></span></span></span></span></span></span></p>
        
        
        
        <p style="text-align: justify;line-height: 1.1;"><span style="color: rgb(0, 0, 0);"><span style="background-color: rgb(255, 255, 255);font-family: arial, helvetica, sans-serif;"><span style="background-color: rgb(230, 126, 35);"><span style="background-color: rgb(255, 255, 255);"><strong><span style="color: rgb(230, 126, 35);">Step 2</span></strong><br />
        
        Remove the handle to access the internal parts of the faucet, you need to remove the handle. The method for removing the handle may vary depending on&nbsp;the type of faucet. For most handles, you need to remove a screw located in the center of the handle. Use a screwdriver to loosen the screw and remove the&nbsp;handle.</span></span></span></span></p>
        
        
        
        <p style="text-align: justify;line-height: 1.1;"><strong><span style="color: rgb(230, 126, 35);"><span style="background-color: rgb(255, 255, 255);font-family: arial, helvetica, sans-serif;"><span style="background-color: rgb(230, 126, 35);"><span style="background-color: rgb(255, 255, 255);">Step 3</span></span></span></span></strong></p>
        
        
        
        <p style="text-align: justify;line-height: 1.1;"><span style="color: rgb(0, 0, 0);"><span style="background-color: rgb(255, 255, 255);font-family: arial, helvetica, sans-serif;"><span style="background-color: rgb(230, 126, 35);"><span style="background-color: rgb(255, 255, 255);">Check the washer and O-ring Once you have removed the handle, you can check the washer and O-ring for any damage. The washer is a small rubber disc<br />
        
        that sits inside the faucet and helps create a watertight seal The O-ring is a small ring-shaped rubber piece that sits around the stem of the faucet.<br />
        
        Check the washer and O-ring for any signs of wear and tear such as cracks or tears. If they appear damaged, they will need to be replaced.</span></span></span></span></p>
        
        
        
        <p style="text-align: justify;line-height: 1.1;"><strong><span style="color: rgb(230, 126, 35);"><span style="background-color: rgb(255, 255, 255);font-family: arial, helvetica, sans-serif;"><span style="background-color: rgb(230, 126, 35);"><span style="background-color: rgb(255, 255, 255);">Step 4</span></span></span></span></strong></p>
        
        
        
        <p style="text-align: justify;line-height: 1.1;"><span style="color: rgb(0, 0, 0);"><span style="background-color: rgb(255, 255, 255);font-family: arial, helvetica, sans-serif;"><span style="background-color: rgb(230, 126, 35);"><span style="background-color: rgb(255, 255, 255);">Replace the washer and O-ring To replace the washer, use a flat-head screwdriver to remove the screw that holds it in place. Replace the washer with a new&nbsp;one and reassemble the faucet.<br />
        
        To replace the O-ring, carefully remove it from the stem using a small tool such as a flat-head screwdriver or pliers. Replace it with a new one and reassemble.</span></span></span></span></p>
        
        
        
        <p style="text-align: justify;line-height: 1.1;"><span style="color: rgb(0, 0, 0);"><span style="background-color: rgb(255, 255, 255);font-family: arial, helvetica, sans-serif;"><span style="background-color: rgb(230, 126, 35);"><span style="background-color: rgb(255, 255, 255);"><strong><span style="color: rgb(230, 126, 35);">Step 5</span></strong><br />
        
        Reassemble the faucet and turn on the water supply Once you have replaced the washer and O-ring, reassemble the faucet and turn on the water supply. Test<br />
        
        the faucet for any leaks. If you still notice water leakage, you may need to tighten the connections or replace other parts of the faucet.</span></span></span></span></p>
        
        
        
        <p style="text-align: justify;line-height: 1.1;"><strong><span style="color: rgb(230, 126, 35);"><span style="background-color: rgb(255, 255, 255);font-family: arial, helvetica, sans-serif;"><span style="background-color: rgb(230, 126, 35);"><span style="background-color: rgb(255, 255, 255);">Conclusion</span></span></span></span></strong></p>
        
        
        
        <p style="text-align: justify;line-height: 1.1;"><span style="color: rgb(0, 0, 0);"><span style="background-color: rgb(255, 255, 255);font-family: arial, helvetica, sans-serif;"><span style="background-color: rgb(230, 126, 35);"><span style="background-color: rgb(255, 255, 255);">Fixing water leakage in a handle is a simple DIY task that can save you money on plumber&#39;s fees. By following these simple steps, you can easily replace the<br />
        
        washer and O-ring and prevent water leakage from happening in the future. Remember to turn off the water supply before starting any repair work and test&nbsp;the faucet for any leaks once you have finished the repair</span></span></span></span></p>
        
        
        
        <p style="line-height: 1.1;">&nbsp;</p>
        
        </div>
        `,
        template2: `
            <div class="template-preview">
                <h3>Template 2 Preview</h3>
                <p>This is a preview of Template 2 content.</p>
            </div>
        `
        // Add more templates here...
    };
    vfUrl = "https://chaitanya-dev-edition-dev-ed--c.vf.force.com/";
    messageContext;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredRecord({ error, data }) {
        if (error) {
            console.log(error);
        } else if (data) {
          this.recordIdContent = data.id;
            console.log(this.recordIdContent);
            this.getContetnBody();
           
        }
    }
    // @wire(MessageContext)
    // messageContext;
    connectedCallback(){
        console.log('receivedMessageCC');
        var reOrigin = "https://chaitanya-dev-edition-dev-ed--c.vf.force.com";
        window.addEventListener("message",(message)=>{
            if(message.origin !== reOrigin){
                return;
            }
            if(message.data.name === "sampleVfToLWc"){
                this.messageContext = message.data.payload;
                console.log('received-',this.messageContext);
            }
        })

    }
    get vfPageUrl() {
        console.log('vfPageUrl-');
        if (this.selectTemplate) {
            const dataToSend = {
                param1: this.templatePreview
            };
            const params = new URLSearchParams(dataToSend);
            return '/apex/tinyMCE?' + params;
        }
        return '';
    }
    updatePreview(event) {
        const selectedTemplateId = event.target.value;
        this.templatePreview = selectedTemplateId ? this.templates[selectedTemplateId] : '';
        const iframe = this.template.querySelector('iframe');
        iframe.addEventListener('load', () => {
            iframe.contentWindow.postMessage(this.templatePreview, 'https://chaitanya-dev-edition-dev-ed--c.vf.force.com');
        });
    }
    onBack(){
        this.selectTemplate = false;
        this.loadTemplate = true;
    }
    insertTemplate() {
        this.selectTemplate = true;
        this.loadTemplate = false;
        const message = 'Hello from LWC!';
        const iframe = this.template.querySelector('iframe');
        console.log('insertTemplate11');
        iframe.contentWindow.postMessage(message,'https://chaitanya-dev-edition-dev-ed--c.vf.force.com');
       
    }
    handleMessage(message) {
        this.receivedMessage = message.message;
        console.log('receivedMessageCC',this.receivedMessage);
    }
    handleReceiveMessage(event) {
        this.receivedMessage = event.detail.message;
        console.log('receivedMessage',this.receivedMessage);
    }
    // getContetnBody(){
    //   getContent({recordId:this.recordIdContent})
    //           .then(response => {
    //               console.log('responceContent',response);
                  
    //           }).catch(error => {
    //               console.log('connectedCallback-Error',error);
    //           });
    // }
    handleIframeLoad() {      
      const iframe = this.template.querySelector('iframe');
      console.log('iframe',this.content);
      const dataToSend = 'Hello from LWC';
      iframe.contentWindow.postMessage(this.content, '*');
      // this.content = window.addEventListener('message', this.handleMessage.bind(this));
    }
    handleSave(){
    //   console.log('Received handleDrop:',this.content);
    this.isLoaded = false;

      if(this.messageContext){
        updateArticalContent({articleId:'ka05g000001vPyOAAU',newTitle:'DemoTemplate',newArticleBody:this.messageContext})
        .then(response => {
           console.log('responceContent',response);
           this.isLoaded = true;
        }).catch(error => {
            console.log('connectedCallback-Error',error);
        });
      }else{
        // this.isLoaded = !this.isLoaded;

        console.log('Received Empty:',this.messageContext);
      }
    }
    handleDragOver(event) {
        event.preventDefault();
        console.log('Received handleDragOver:');
    }
    handleDrop(event) {
        event.preventDefault();
        console.log('Received handleDrop:');
    }
    handleRichTextChange(event) {
        this.richTextValue = event.target.value;
    }    
    handleDragStart(event) {
      event.dataTransfer.setData('text/plain', event.target.id);
      console.log(event.target.id);
      const message = event.target.id;
      this.template.querySelector("iframe").contentWindow.postMessage(message, this.vfOrigin.data);
    }   
    handledragText(){
        console.log('DragStart');
    }
    allowDrop(event){
        event.preventDefault();
    }
}