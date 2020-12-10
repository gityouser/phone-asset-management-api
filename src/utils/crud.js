export const getOne = model => (req, res) => {
  const reqId = req.params.id

  const doc = await model.findById({_id: reqId})

  if (!doc) { return res.status(404).end()}

  res.status(200).json({data: doc})
}


// TODO: swap getAll for getMany, once user auth gets added
export const getMany = model => (req, res) => {
  const userId = req.user._id;

  const docs = await model.find({createdBy: userId}).exec()

  if(!docs) {
    return res.status(404).end();
  }

  res.status(200).json({data: docs})
}

export const getAll = model => (req, res) => {
  const docs = await model.find({}).exec()

  if(!docs) {
    return res.status(404).end();
  }

  res.status(200).json({data: docs})
}

export const createOne = model => (req, res) => {
  const doc = await model.create({...req.body}).exec()

  res.status(201).json({data: doc})
}

export const createMany = model => (req, res) => {
  const docs = await model.create([...req.body]).exec()

  res.status(201).json({data: docs})
}

export const updateOne = model => async (req, res) => {
  const {id} = req.params;

  const doc = await model.findOneAndUpdate({_id: id}, req.body, {new: true}).exec()

  if (!doc) {
    return res.status(400).end()
  }

  res.status(200).json({data: doc})
}

export const removeOne = model => async (req, res) => {
  const doc = await model.findOneAndRemove({_id: req.params.id}).exec()

  if (!doc) {return res.status(400).end()}

  res.status(200).json({data: doc})
}