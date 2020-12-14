export const getOne = (model) => async (req, res, next) => {
  try {
    const reqId = req.params.id

    const doc = await model.findById({ _id: reqId })

    if (!doc) {
      return res.status(404).end()
    }

    res.status(200).json({ data: doc })
  } catch (err) {
    next(err)
  }
}

// TODO: swap getAll for getMany, once user auth gets added
export const getMany = (model) => async (req, res, next) => {
  try {
    const userId = req.user._id

    const docs = await model.find({ createdBy: userId }).exec()

    if (!docs) {
      return res.status(404).end()
    }

    res.status(200).json({ data: docs })
  } catch (err) {
    next(err)
  }
}

export const getAll = (model) => async (_req, res) => {
  const docs = await model.find({}).exec()

  if (!docs) {
    return res.status(404).end()
  }

  res.status(200).json({ data: docs })
}

export const createOne = (model) => async (req, res, next) => {
  try {
    const doc = await model.create({ ...req.body })

    if (!doc) {
      return res.status(400).end()
    }

    res.status(201).json({ data: doc })
  } catch (err) {
    next(err)
  }
}

export const createMany = (model) => async (req, res, next) => {
  try {
    const docs = await model.create([...req.body])

    res.status(201).json({ data: docs })
  } catch (err) {
    next(err)
  }
}

export const updateOne = (model) => async (req, res, next) => {
  try {
    const { id } = req.params

    const doc = await model
      .findOneAndUpdate({ _id: id }, req.body, { new: true })
      .exec()

    if (!doc) {
      return res.status(400).end()
    }

    res.status(200).json({ data: doc })
  } catch (err) {
    next(err)
  }
}

export const removeOne = (model) => async (req, res, next) => {
  try {
    const doc = await model.findOneAndRemove({ _id: req.params.id }).exec()

    if (!doc) {
      return res.status(400).end()
    }

    res.status(200).json({ data: doc })
  } catch (err) {
    next(err)
  }
}

export const crudControllers = (model) => ({
  getOne: getOne(model),
  getMany: getMany(model),
  getAll: getAll(model),
  createOne: createOne(model),
  createMany: createMany(model),
  updateOne: updateOne(model),
  removeOne: removeOne(model),
})
