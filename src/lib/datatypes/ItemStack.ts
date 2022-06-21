export class ItemStack {
    private item: string;
    private amount: number;
    private tag: string;

    constructor(item: string, amount: number, tag?: string) {
        this.item = item;
        this.amount = amount;
        this.tag = tag;
    }
}

interface ItemStackObject {
    item: string;
    amount?: number;
    tag?: string;
}

export default function itemStack({ item, amount = 1, tag }: ItemStackObject) {
    return new ItemStack(item, amount, tag)
}

