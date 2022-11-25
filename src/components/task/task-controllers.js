import Task from "#components/task/task-model.js";
import Joi from "joi";

export async function index(ctx) {
  try {
    const tasks = await Task.find({});
    ctx.ok(tasks);
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}

export async function create(ctx) {
  try {
    console.log(ctx.request.body);
    const taskValidationSchema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      deadline: Joi.date(),
    });

    const { error, value } = taskValidationSchema.validate(ctx.request.body);
    if (error) throw new Error(error);
    console.log("No error found continuing the process", value);
    const newTask = await Task.create(value);
    ctx.ok(newTask);
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}

export async function update(ctx) {
  try {
    const taskValidationSchema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      deadline: Joi.date(),
      status: Joi.string().default("PENDING"),
    });

    const { error, value } = taskValidationSchema.validate(ctx.request.body);
    if (error) throw new Error(error);
    console.log("No error found continuing the process", value);
    const updatedTask = await Task.findByIdAndUpdate(
      ctx.params.id,
      {
        $set: value,
      },
      {
        runValidators: true,
        new: true,
      }
    );
    ctx.ok(updatedTask);
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}

export async function remove(ctx) {
  try {
    const deletedTask = await Task.findByIdAndDelete(ctx.params.id);
    ctx.ok(deletedTask);
  } catch (e) {
    ctx.badRequest({ message: e.message });
  }
}

export async function id(ctx) {
  // console.log(ctx.params)
  // console.log(ctx.query)
  ctx.ok({});
}
