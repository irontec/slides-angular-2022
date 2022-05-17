/* ###### Typescript - Generics

## Generic con Arrays */

class Caja<Volumen> {
    items: Volumen[] = [];
    add(item: Volumen) {
      this.items.push(item);
    }
  }

  const c = new Caja<number>();
  c.add(1);
  c.add(2);
  console.log(c.items); // >> [1, 2]

  const d = new Caja<string>();
  d.add('5l');
  d.add('20l');
  console.log(d.items); // >> ["5l", "20l"]
