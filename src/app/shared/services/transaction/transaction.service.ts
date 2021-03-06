import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Plans } from '../../interfaces/plans.interface';
import { Transaction } from '../../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  transfer(transactionData: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(
      `${this.API_URL}/lancamentos`,
      transactionData
    );
  }

  getPlanosConta(login: string): Observable<Plans[]> {
    return this.http.get<Plans[]>(
      `${this.API_URL}/lancamentos/planos-conta?login=${login}`
    );
  }
}
