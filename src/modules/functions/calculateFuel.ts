export async function calculateFuel(data: {
  maxLoad: number;
  distanceTraveled: number;
  averageConsumption: number;
}): Promise<number> {
  try {
    const { maxLoad, distanceTraveled, averageConsumption } = data;
    const averageWeightPerKm = maxLoad / distanceTraveled;
    const consumptionPerTonPerKm = averageConsumption / averageWeightPerKm;

    return consumptionPerTonPerKm;
  } catch (err) {
    console.log({ getForm: data });
    console.log({ getFormError: err });
    throw new Error("Error in getForm calculation");
  }
}
