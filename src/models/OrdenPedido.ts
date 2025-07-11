export interface OrdenPedido {
  IdOpci: number;
  IdFp?: number;
  IdCliente?: number;
  IdVendedor?: number;
  IdOpd?: number;
  FecRecepcion?: string;
  FecInicio?: string;
  FecProcVi?: string;
  RazonSocialCliente?: string;
  NumOp?: string;
  IdMda?: number;
  TotalSinIgv?: number;
  NumRefCliente?: string;
  ClienteFinal?: string;
  ClienteProveedor?: string;
  Vendedor1?: string;
  Vendedor2?: string;
  Lider?: string;
  UbrutaCoti?: string;
  ComisionCompartida?: boolean;
  Estado?: boolean;
  FormaPago?: any;
  Cliente?: any;
  Vendedor?: any;
  Moneda?: any;
  OrdenPedidoDetalles?: any[];
}