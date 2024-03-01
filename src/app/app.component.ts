import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  clienteForm: FormGroup;
  clientes: any[] | undefined;

  constructor(private fb: FormBuilder, private clienteService: ClienteService) {
    this.clienteForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      cpf: ['', Validators.required],
      address: this.fb.group({
        address: ['', Validators.required],
        neighborhood: ['', Validators.required]
      }),
      phones: this.fb.array([])
    });
  }

  ngOnInit() {
    this.listarClientes();
  }

  adicionarTelefone() {
    this.phones.push(this.fb.control('', Validators.required));
  }

  removerTelefone(index: number) {
    this.phones.removeAt(index);
  }

  get phones() {
    return this.clienteForm.get('phones') as any;
  }

  adicionarCliente() {
    if (this.clienteForm.valid) {
      this.clienteService.adicionarCliente(this.clienteForm.value).subscribe(response => {
        console.log('Cliente adicionado com sucesso:', response);
        this.listarClientes();
        this.clienteForm.reset();
      });
    }
  }

  listarClientes() {
    this.clienteService.listarClientes().subscribe(response => {
      this.clientes = response.content;
    });
  }
}

