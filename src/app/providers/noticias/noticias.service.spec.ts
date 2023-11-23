// noticias.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoticiasProvider } from './noticias.service'; // Importa NoticiasProvider

describe('NoticiasProvider', () => { // Utiliza el nombre correcto del servicio
  let service: NoticiasProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      // No es necesario proveer el servicio aquí, solo se crea una instancia del servicio
    });
    service = TestBed.inject(NoticiasProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
