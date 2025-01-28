interface Writer {
  penName: string;
  realName: string;
  writeBook: (title: string, numPages: number) => boolean;
}

const agatha: Writer = {
  penName: 'agatha christie',
  realName: 'joan smith',
  writeBook: (title: string, numPages: number) => {
    return true;
  }
};

const higherOrderFunc = (callback: (num: number) => number) => {};

higherOrderFunc((num: number) => { return 42; });
