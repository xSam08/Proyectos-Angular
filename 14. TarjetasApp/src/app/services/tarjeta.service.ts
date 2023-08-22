import { Injectable } from '@angular/core';
import { TarjetaCredito } from '../models/TarjetaCredito';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private firestore: Firestore) { }

  guardarTarjeta(tarjeta: TarjetaCredito) {
    
  }
}
