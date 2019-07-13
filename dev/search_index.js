var documenterSearchIndex = {"docs":
[{"location":"index.html#FinEtools-(Finite-Element-tools)-Documentation-1","page":"Home","title":"FinEtools (Finite Element tools) Documentation","text":"","category":"section"},{"location":"index.html#Conceptual-guide-1","page":"Home","title":"Conceptual guide","text":"","category":"section"},{"location":"index.html#","page":"Home","title":"Home","text":"The construction of the toolkit is described: the composition of modules, the basic data structures, the methodology of computing quantities required in the finite element methodology, and more.","category":"page"},{"location":"index.html#","page":"Home","title":"Home","text":"Pages = [\n    \"guide/guide.md\",\n]\nDepth = 1","category":"page"},{"location":"index.html#Manual-1","page":"Home","title":"Manual","text":"","category":"section"},{"location":"index.html#","page":"Home","title":"Home","text":"The description of the types and the functions, organized by module and/or other logical principle.","category":"page"},{"location":"index.html#","page":"Home","title":"Home","text":"Pages = [\n    \"man/types.md\",\n    \"man/functions.md\",\n]\nDepth = 2","category":"page"},{"location":"guide/guide.html#Guide-1","page":"Guide","title":"Guide","text":"","category":"section"},{"location":"guide/guide.html#","page":"Guide","title":"Guide","text":"The FinEtools package is used here to solve problems of mesh generation in image-based data sets such as those coming from CT or MRI scans.","category":"page"},{"location":"guide/guide.html#Modules-1","page":"Guide","title":"Modules","text":"","category":"section"},{"location":"guide/guide.html#","page":"Guide","title":"Guide","text":"The package FinEtoolsVoxelMesher has the following structure:","category":"page"},{"location":"guide/guide.html#","page":"Guide","title":"Guide","text":"Top-level:    FinEtoolsVoxelMesher is the  top-level module.  \nVoxelBoxModule: This module implements functions to generate and modify  CT scan and other medical images.\nVoxelTetMeshingModule: Implement functions to mesh and re-mesh voxel images with tetrahedral elements. The remeshing itself is implemented in TetRemeshingModule.","category":"page"},{"location":"man/types.html#Types-1","page":"Types","title":"Types","text":"","category":"section"},{"location":"man/types.html#Working-with-voxel-images-1","page":"Types","title":"Working with voxel images","text":"","category":"section"},{"location":"man/types.html#","page":"Types","title":"Types","text":"Modules = [FinEtools, FinEtoolsVoxelMesher.VoxelBoxModule]\nPrivate = true\nOrder = [:type]","category":"page"},{"location":"man/types.html#Meshing-and-remeshing-1","page":"Types","title":"Meshing and remeshing","text":"","category":"section"},{"location":"man/types.html#","page":"Types","title":"Types","text":"Modules = [FinEtools, FinEtoolsVoxelMesher.VoxelTetMeshingModule, FinEtoolsVoxelMesher.TetRemeshingModule]\nPrivate = false\nOrder = [:type]","category":"page"},{"location":"man/functions.html#Functions-1","page":"Functions","title":"Functions","text":"","category":"section"},{"location":"man/functions.html#Working-with-voxel-images-1","page":"Functions","title":"Working with voxel images","text":"","category":"section"},{"location":"man/functions.html#","page":"Functions","title":"Functions","text":"Modules = [FinEtools, FinEtoolsVoxelMesher.VoxelBoxModule]\nPrivate = true\nOrder = [:function]","category":"page"},{"location":"man/functions.html#FinEtoolsVoxelMesher.VoxelBoxModule.vtkexport-Union{Tuple{DataT}, Tuple{CoordT}, Tuple{String,VoxelBoxVolume{CoordT,DataT}}} where DataT<:Number where CoordT<:Number","page":"Functions","title":"FinEtoolsVoxelMesher.VoxelBoxModule.vtkexport","text":"vtkexport(theFile::String, V::VoxelBoxVolume{CoordT,DataT}) where {CoordT<:Number,DataT<:Number}\n\nCompute.\n\n\n\n\n\n","category":"method"},{"location":"man/functions.html#FinEtoolsVoxelMesher.VoxelBoxModule.fillsolid!-Union{Tuple{DataT}, Tuple{VoxelBoxVolume,SolidCF,DataT}} where DataT<:Number","page":"Functions","title":"FinEtoolsVoxelMesher.VoxelBoxModule.fillsolid!","text":"fillsolid!(V::VoxelBoxVolume,\n    f::SolidCF, fillvalue::DataT) where {DataT<:Number}\n\nFilled a solid using a solid characteristic function.\n\n\n\n\n\n","category":"method"},{"location":"man/functions.html#FinEtoolsVoxelMesher.VoxelBoxModule.fillvolume!-Union{Tuple{DataT}, Tuple{VoxelBoxVolume,DataT}} where DataT<:Number","page":"Functions","title":"FinEtoolsVoxelMesher.VoxelBoxModule.fillvolume!","text":"fillvolume!(V::VoxelBoxVolume, fillvalue::DataT) where {DataT<:Number}\n\nFill the volume with a given value.\n\n\n\n\n\n","category":"method"},{"location":"man/functions.html#FinEtoolsVoxelMesher.VoxelBoxModule.pad-Tuple{VoxelBoxVolume,Any,Any,Any,Any}","page":"Functions","title":"FinEtoolsVoxelMesher.VoxelBoxModule.pad","text":"pad(V::VoxelBoxVolume, ipad, jpad, kpad, padvalue)\n\nPad voxel box with a constant value.\n\n\n\n\n\n","category":"method"},{"location":"man/functions.html#FinEtoolsVoxelMesher.VoxelBoxModule.solidbox-Union{Tuple{CoordT}, Tuple{Tuple{CoordT,CoordT,CoordT},Tuple{CoordT,CoordT,CoordT}}} where CoordT<:Number","page":"Functions","title":"FinEtoolsVoxelMesher.VoxelBoxModule.solidbox","text":"solidbox(corner1::Tuple{CoordT, CoordT, CoordT},\n    corner2::Tuple{CoordT, CoordT, CoordT}) where {CoordT<:Number}\n\nSolid box  with faces aligned with the global Cartesian axes.\n\n\n\n\n\n","category":"method"},{"location":"man/functions.html#FinEtoolsVoxelMesher.VoxelBoxModule.solidhalfspace-Union{Tuple{CoordT}, Tuple{Tuple{CoordT,CoordT,CoordT},Tuple{CoordT,CoordT,CoordT}}} where CoordT<:Number","page":"Functions","title":"FinEtoolsVoxelMesher.VoxelBoxModule.solidhalfspace","text":"solidhalfspace(center::Tuple{CoordT, CoordT, CoordT},\n    normal::Tuple{CoordT, CoordT, CoordT}) where {CoordT<:Number}\n\nSolid halfspace.\n\n\n\n\n\n","category":"method"},{"location":"man/functions.html#FinEtoolsVoxelMesher.VoxelBoxModule.solidsphere-Union{Tuple{CoordT}, Tuple{Tuple{CoordT,CoordT,CoordT},CoordT}} where CoordT<:Number","page":"Functions","title":"FinEtoolsVoxelMesher.VoxelBoxModule.solidsphere","text":"solidsphere(center::Tuple{CoordT, CoordT, CoordT}, r::CoordT) where {CoordT<:Number}\n\nSolid sphere.\n\n\n\n\n\n","category":"method"},{"location":"man/functions.html#FinEtoolsVoxelMesher.VoxelBoxModule.threshold-NTuple{4,Any}","page":"Functions","title":"FinEtoolsVoxelMesher.VoxelBoxModule.threshold","text":"threshold(V, threshold_value, voxel_below, voxel_above)\n\nThreshold the data.\n\n\n\n\n\n","category":"method"},{"location":"man/functions.html#FinEtoolsVoxelMesher.VoxelBoxModule.trim-Tuple{VoxelBoxVolume,Any}","page":"Functions","title":"FinEtoolsVoxelMesher.VoxelBoxModule.trim","text":"trim(V::VoxelBoxVolume, emptyvalue)\n\nTrim off pieces of the volume that consist only of the empty value.\n\n\n\n\n\n","category":"method"},{"location":"man/functions.html#Meshing-and-remeshing-1","page":"Functions","title":"Meshing and remeshing","text":"","category":"section"},{"location":"man/functions.html#","page":"Functions","title":"Functions","text":"Modules = [FinEtools, FinEtoolsVoxelMesher.VoxelTetMeshingModule, FinEtoolsVoxelMesher.TetRemeshingModule]\nPrivate = true\nOrder = [:function]","category":"page"},{"location":"man/functions.html#FinEtoolsVoxelMesher.VoxelTetMeshingModule.mesh!","page":"Functions","title":"FinEtoolsVoxelMesher.VoxelTetMeshingModule.mesh!","text":"mesh!(self::ImageMesher, stretch::FFlt = 1.2)\n\nPerform a meshing step.\n\nIf  no mesh exists,  the initial mesh is created; otherwise a coarsening sequence of coarsen surface -> smooth -> coarsen volume -> smooth is performed.\n\nAfter meshing the vertices, tetrahedra, and material identifiers,  can be retrieved as self.v, self.t, and self.tmid.\n\n\n\n\n\n","category":"function"},{"location":"man/functions.html#FinEtoolsVoxelMesher.VoxelTetMeshingModule.volumes-Tuple{ImageMesher}","page":"Functions","title":"FinEtoolsVoxelMesher.VoxelTetMeshingModule.volumes","text":"volumes(self::ImageMesher)\n\nCompute tetrahedral volumes in the current mesh.\n\n\n\n\n\n","category":"method"},{"location":"man/functions.html#FinEtoolsVoxelMesher.TetRemeshingModule.coarsen-Union{Tuple{F}, Tuple{Array{Int64,2},Array{Float64,2},Array{Int64,1}}} where F<:Function","page":"Functions","title":"FinEtoolsVoxelMesher.TetRemeshingModule.coarsen","text":"coarsen(t::Array{Int, 2}, inputv::Array{Float64, 2}, tmid::Vector{Int}; bv::Vector{Bool} = Bool[], desired_ts::Number = 0.0, stretch::Number = 1.25, nblayer::Int = 1, surface_coarsening::Bool = false, preserve_thin::Bool = false, vertex_weight::Vector{Float64} = Float64[], reportprogress::F = n -> nothing) where {F<:Function}\n\nCoarsen a T4 (tetrahedral) mesh.\n\nArguments\n\nt = array with vertex numbers, one per tetrahedron in each row\nv = array of vertex coordinates, one per vertex in each row\ntmid = tetrahedron material identifiers, one per tetrahedron in each row\nKeyword arguments:\nbv=array for all vertices in the input array v.  Is the vertex on the boundary? True or false. The boundary vertices  are in layer 1. The vertex layer numbers increase away from  the boundary,  and the bigger the vertex layer number the bigger  the mesh size.\ndesired_ts=mesh size desired for vertices in layer 1, here mesh size is  the length of an edge\nstretch=the mesh size should increase by this much within one layer of   elements, default is 1.25\nnblayer=number of boundary layers where the mesh size should not increase,   default is 1\nsurface_coarsening = is the coarsening intended for the interior or for  the surface? default is false, which means the default  is coarsening of the interior.\npreserve_thin= when coarsening the surface, should features which are  thin  be unaffected by the coarsening? Here thin means consisting of  only \"surface\" vertices.\nvertex_weight= weight of vertices, one per  vertex; weight <= 1.0 is ignored,  but weight>1.0  is used to \"stretch\" edges connected  to the vertex.  In this way one may preserve certain edges by assigning  larger  weight to their vertices. Default is vertex_weight= [] (which means  ignore the vertex weights)\n\nOutput\n\nt, v, tmid = new arrays for the coarsened grid\n\n\n\n\n\n","category":"method"}]
}
