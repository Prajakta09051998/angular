import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DataBindingComponent } from "../data-binding/data-binding.component";
import { InputOutputBindingComponent } from "../../input-output-binding/input-output-binding.component";
interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
@Component({
  selector: 'app-primeng',
  standalone: true,
  imports: [AccordionModule, FileUploadModule, ToastModule, ButtonModule, InputOutputBindingComponent],
  templateUrl: './primeng.component.html',
  styleUrl: './primeng.component.scss',
  providers: [MessageService]
})

export class PrimengComponent {
  files: File[] = [];
  totalSize : number = 0;
  totalSizePercent : number = 0;
  config: any;
  customerTabs: string[] = ['Data Binding', 'Input Output Binding', 'Templating'];
    constructor(private messageService: MessageService) {}
  choose(event: any, callback: any) {
        callback();
    }

    onRemoveTemplatingFile(event: any, file: { size: any; }, removeFileCallback: (arg0: any, arg1: any) => void, index: any) {
        removeFileCallback(event, index);
        this.totalSize -= parseInt(this.formatSize(file.size));
        this.totalSizePercent = this.totalSize / 10;
    }

    onClearTemplatingUpload(clear:any) {
        clear();
        this.totalSize = 0;
        this.totalSizePercent = 0;
    }

    onTemplatedUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    }

    onSelectedFiles(event : any) {
        this.files = event.currentFiles;
        console.log(this.files);
        
        this.files.forEach((file) => {
            this.totalSize += parseInt(this.formatSize(file.size));
        });
        this.totalSizePercent = this.totalSize / 10;
    }

    uploadEvent(callback:any) {
        callback();
    }

   formatSize(bytes: number): string {
    const k = 1024;
    const dm = 3;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']; // Hardcoded fallback

    if (bytes === 0) {
        return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
}
}
