/* Importe la función signal */
import { Component, signal } from '@angular/core';
import { IonCardContent, IonButton, IonList, IonItem, IonLabel,IonFab, IonFabButton, IonIcon, IonCard,IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
/* Importe la función y el ícono */
import { addIcons } from 'ionicons';
import { cloudUploadOutline } from 'ionicons/icons';
/* Importe el servicio */
import { TeachablemachineService } from '../services/teachablemachine.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonButton, IonList, IonItem, IonLabel,IonFab, IonFabButton, IonIcon, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  imageReady = signal(false)
  imageUrl = signal("")
  /* Declare los atributos para almacenar el modelo y la lista de clases */
  modelLoaded = signal(false);
  classLabels: string[] = [];
  constructor(private teachablemachine: TeachablemachineService) {

    addIcons({ cloudUploadOutline });

    /*
    /* Método ngOnInit para cargar el modelo y las clases 
    async ngOnInit() {
      await this.teachablemachine.loadModel()
      this.classLabels = this.teachablemachine.getClassLabels()
      this.modelLoaded.set(true)
    }
    */
  }
  /* El método onSubmit para enviar los datos del formulario mediante el servicio */
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
        const file = input.files[0];
        const reader = new FileReader();
        // Convertir el archivo a una URL base64 para mostrarlo en el html
        reader.onload = () => {
          this.imageUrl.set(reader.result as string)
          this.imageReady.set(true)
        };

        reader.readAsDataURL(file); // Leer el archivo como base64
    }
  }  
}
