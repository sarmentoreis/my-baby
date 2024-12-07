import { useEffect } from "react";
import GridComponent from "../grid";
import ButtonComponent from "../button";
import { handleInputChange, selectItem } from "../../utils/action";
import { adjustDateTimeForTimezone } from "../../utils/core";
import DateTimePickerComponent from "../dateTimePicker";
import TextFieldComponent from "../textfield";

const Eat = ({ data, setData, translate }) => {
  useEffect(() => {
    setData({ ...data, action_type: 2 });
  }, []);

  return (
    <GridComponent container={true} spacing={2}>
      <GridComponent item={true} size={{ xs: 12 }}>
        <ButtonComponent
          color={data.type === 1 ? "secondary" : "primary"}
          onClick={() => {
            handleInputChange("side", null, data, setData);
            handleInputChange("end_date", null, data, setData);
            selectItem(1, "type", data, setData);
          }}
        >
          {translate("eat-bottle")}
        </ButtonComponent>
        <ButtonComponent
          color={data.type === 2 ? "secondary" : "primary"}
          onClick={() => {
            handleInputChange("quantity", null, data, setData);
            selectItem(2, "type", data, setData);
          }}
        >
          {translate("eat-bosom")}
        </ButtonComponent>
      </GridComponent>
      <GridComponent item={true} size={{ xs: 12 }}>
        <DateTimePickerComponent
          value={
            data?.start_date
              ? adjustDateTimeForTimezone(data?.start_date)
              : null
          }
          label={
            data.type === 1
              ? translate("data-hour")
              : translate("data-hour-start")
          }
          name="start_date"
          fullWidth={true}
          ampm={false}
          format="DD/MM/YYYY HH:mm"
          onChange={(value) => {
            handleInputChange(
              "start_date",
              new Date(value.toString()),
              data,
              setData
            );
          }}
        />
      </GridComponent>
      {data.type === 2 ? (
        <GridComponent item={true} size={{ xs: 12 }}>
          <DateTimePickerComponent
            value={
              data?.end_date ? adjustDateTimeForTimezone(data?.end_date) : null
            }
            label={translate("data-hour-end")}
            name="end_date"
            fullWidth={true}
            ampm={false}
            format="DD/MM/YYYY HH:mm"
            onChange={(value) => {
              handleInputChange(
                "end_date",
                new Date(value.toString()),
                data,
                setData
              );
            }}
          />
        </GridComponent>
      ) : null}
      {data.type === 1 ? (
        <GridComponent item={true} size={{ xs: 12 }}>
          <TextFieldComponent
            value={data?.quantity ? data.quantity : ""}
            label={translate("quantity") + " (ml)"}
            onChange={(event) => {
              handleInputChange("quantity", event.target.value, data, setData);
            }}
            name="quantity"
            type={"number"}
            fullWidth={true}
          />
        </GridComponent>
      ) : (
        <GridComponent item={true} size={{ xs: 12 }}>
          <ButtonComponent
            color={data.side === 1 ? "secondary" : "primary"}
            onClick={() => {
              selectItem(1, "side", data, setData);
            }}
          >
            {translate("left")}
          </ButtonComponent>
          <ButtonComponent
            color={data.side === 2 ? "secondary" : "primary"}
            onClick={() => {
              selectItem(2, "side", data, setData);
            }}
          >
            {translate("right")}
          </ButtonComponent>
          <ButtonComponent
            color={data.side === 3 ? "secondary" : "primary"}
            onClick={() => {
              selectItem(3, "side", data, setData);
            }}
          >
            {translate("both")}
          </ButtonComponent>
        </GridComponent>
      )}
      <GridComponent item={true} size={{ xs: 12 }}>
        <TextFieldComponent
          value={data?.observation ? data.observation : ""}
          label={translate("observation")}
          onChange={(event) => {
            handleInputChange("observation", event.target.value, data, setData);
          }}
          name="observation"
          rows={6}
          fullWidth={true}
          multiline={true}
        />
      </GridComponent>
    </GridComponent>
  );
};

export default Eat;
