import { createChannel } from "./channel.ts";
import { createMessage } from "./message.ts";

type Pedido = {
    id: string;
    idCliente: string;
    itens: ItemPedido[];
}

type ItemPedido = {
    id: string;
    nome: string;
    quantidade: number;
    precoUnitario: number;
}

const item: ItemPedido = {
    id: "I_001",
    nome: "Caneta",
    quantidade: 10,
    precoUnitario: 2.5
};

const pedido: Pedido = {
    id: "P_001",
    idCliente: "C_001",
    itens: [item]
};

const novoPedido = createMessage({
    name: "NovoPedido",
    payload: JSON.stringify(pedido)
})

const canalPedidos = createChannel("novo_pedido");

canalPedidos.subscribe((message) => {
    const pedidoRecebido: Pedido = JSON.parse(message.payload);
    console.log("Pedido recebido no canal:", pedidoRecebido);
});

await canalPedidos.send(novoPedido);