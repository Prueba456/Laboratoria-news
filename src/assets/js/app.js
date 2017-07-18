const render = (root) => {
    root.empty();
    const container = $('<div class=""></div>');
    container.append(Header());
    container.append(NavBar());
    if (state.status==0) {
    container.append(Principal(_=>{ render(root) }));
    container.append(Row1());
    container.append(Mundo())
    container.append(Row2());
    container.append(RowLG());
    container.append(Tecnologia());
    container.append(Row3());
    container.append(Educacion());
    container.append(Row4());
    container.append(Opinion());
    container.append(Row5());
   }else if(state.status==1){
   container.append(Descripcion());

    }
    container.append(Footer());

    root.append(container);
}

const state = {
    dataNews: null,
    imag: null,
    informacion: null,
    descripcion: null,
    status: 0,
};

$(_ => {
 $.get("api/news/", function(data, status){
    state.dataNews=data;
    console.log(data);
    const root = $('.root');
    render(root);
 });
});
