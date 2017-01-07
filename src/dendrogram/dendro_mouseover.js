module.exports = function dendro_mouseover(cgm, inst_selection, inst_data, inst_rc){

  var params = cgm.params;

  // run instantly on mouseover
  d3.select(inst_selection)
    .classed('hovering', true);

  if (cgm.params.dendro_callback != null){
    cgm.params.dendro_callback(inst_selection);
  }

  // Category-breakdown of dendrogram-clusters
  /////////////////////////////////////////////
  /*

  1. get information for nodes in cluster
  2. find category-types that are string-type
  3. count instances of each category name for each category-type

  */

  // 1: get information for nodes in cluster
  ///////////////////////////////////////////

  // names of nodes in cluster
  var clust_names = inst_data.all_names;
  // array of nodes in the cluster
  var clust_nodes = [];

  var all_nodes = cgm.params.network_data[inst_rc+'_nodes'];

  console.log(clust_names)

  var inst_name;
  _.each(all_nodes, function(inst_node){

    inst_name = inst_node.name;

    if(clust_names.indexOf(inst_name) >= 0){
      clust_nodes.push(inst_node);
    }

  });

  console.log('clust_nodes:')
  console.log(clust_nodes)


  // 2: find category-types that are string-type
  ///////////////////////////////////////////////

  var inst_cat_info = params.viz.cat_info[inst_rc];
  var cat_types_index = _.keys(inst_cat_info);

  // var inst_node = params.network_data[inst_rc+'_nodes'][0];

  // get category names
  var cat_types_names = [];
  var type_name;
  var inst_index;
  for (var i = 0; i < cat_types_index.length; i++) {
    inst_index = 'cat-' + String(i);

    type_name = params.viz.cat_names[inst_rc][inst_index]
    cat_types_names.push(type_name)

  }

  // 3: count instances of each category name for each category-type
  var inst_name;
  var cat_index;
  _.each(cat_types_index, function(cat_index){

    inst_index = cat_index.split('-')[1];
    inst_name = cat_types_names[inst_index];

    // loop throught nodes and keep running count of categories
    _.each(clust_nodes, function (tmp_node){

      console.log(cat_index)
      console.log('----')
      console.log(tmp_node[cat_index])

      // if (cat_name.indexOf(': ') >=0){
      //   cat_name = cat_name.split(': ')[1];
      // }

    });

    console.log('\n\n')

  });

};