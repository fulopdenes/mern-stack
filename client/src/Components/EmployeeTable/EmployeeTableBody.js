import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return {r: `${r}`, g: `${g}`, b: `${b}`, a: `${alpha}`};
};

const TableBody = ({tableData, columns, onDelete, path}) => {
    return (
        <tbody>
        {tableData && tableData.length ? (
            tableData.map((data) => {
                return (
                    <tr key={data._id}>
                        {columns.map(({accessor}) => {
                            if (accessor === "favColor") {
                                const rgbaColorMAIN = hex2rgba(data["favColor"]);
                                const {r, g, b, a} = rgbaColorMAIN;
                                return (
                                    <td key={accessor}>
                                        <>
                                            <div
                                                style={{
                                                    backgroundColor: `rgba(${r},${g},${b},${a})`,
                                                    width: 100,
                                                    borderRadius: "5px",
                                                    height: 50,
                                                    border: "1px solid black",
                                                }}
                                            ></div>
                                        </>
                                    </td>
                                );
                            }
                            if (accessor === "startingDate") {
                                let simpleDate = data[accessor] ? data[accessor] : "——";
                                let result = simpleDate.split("T")[0];
                                return <td key={accessor}>{result}</td>;
                            }
                            if (accessor === "salaryDif") {
                                let result = data["currentSalary"] - data["desiredSalary"];
                                if (result >= 0) {
                                    return (
                                        <td
                                            key={accessor}
                                            style={{
                                                color: "green",
                                            }}
                                        >
                                            {result}
                                        </td>
                                    );
                                } else {
                                    return (
                                        <td
                                            key={accessor}
                                            style={{
                                                color: "red",
                                            }}
                                        >
                                            {result}
                                        </td>
                                    );
                                }
                            }
                            if (accessor === "desiredSalary") {
                                let splitedResult = data[accessor].split("");
                                let last3digit = [
                                    splitedResult.at(-3),
                                    splitedResult.at(-2),
                                    splitedResult.at(-1),
                                ].join("");

                                let middle3digit = [
                                    splitedResult.at(-6),
                                    splitedResult.at(-5),
                                    splitedResult.at(-4),
                                ].join("");

                                let restDidits =
                                    splitedResult.length >= 6
                                        ? [
                                            data[accessor].split("", splitedResult.length - 6),
                                        ].join("")
                                        : "";

                                let result = `${restDidits} ${middle3digit} ${last3digit} Ft`;
                                return <td key={accessor}>{result}</td>;
                            }
                            if (accessor === "currentSalary") {
                                let splitedResult = data[accessor].split("");
                                let last3digit = [
                                    splitedResult.at(-3),
                                    splitedResult.at(-2),
                                    splitedResult.at(-1),
                                ].join("");

                                let middle3digit = [
                                    splitedResult.at(-6),
                                    splitedResult.at(-5),
                                    splitedResult.at(-4),
                                ].join("");

                                let restDidits =
                                    splitedResult.length >= 6
                                        ? [
                                            data[accessor].split("", splitedResult.length - 6),
                                        ].join("")
                                        : "";

                                let result = `${restDidits} ${middle3digit} ${last3digit} Ft`;
                                return <td key={accessor}>{result}</td>;
                            }
                            if (accessor === "equipments") {
                                return (
                                    <td key={accessor} className="btn-eq">
                                        <>
                                            <Link to={`${path}/update/${data._id}`}>
                                                <Button
                                                    style={{
                                                        minWidth: "90px",
                                                        // background: "#ff642f",
                                                        // color: "black",
                                                        // border: "none",
                                                        cursor: "pointer",
                                                        borderRadius: "10px",
                                                    }}
                                                    variant="outlined"
                                                >
                                                    Add Equipment
                                                </Button>
                                            </Link>
                                        </>
                                    </td>
                                );
                            }

                            if (accessor === "actions") {
                                return (
                                    <td key={accessor} className="btn-td">
                                        <>
                                            <Link to={`${path}/update/${data._id}`}>
                                                <Button
                                                    style={{
                                                        minWidth: "90px",
                                                        // background: "#ff642f",
                                                        // color: "black",
                                                        // border: "none",
                                                        cursor: "pointer",
                                                        borderRadius: "10px",
                                                    }}
                                                    variant="outlined"
                                                >
                                                    Update
                                                </Button>
                                            </Link>
                                            <Button
                                                onClick={() => onDelete(data._id)}
                                                // startIcon={<DeleteIcon />}
                                                variant="outlined"
                                                color="warning"
                                                style={{
                                                    minWidth: "90px",
                                                    // background: "#ff642f",
                                                    // color: "black",
                                                    // border: "none",
                                                    cursor: "pointer",
                                                    borderRadius: "10px",
                                                }}
                                            >
                                                DELETE
                                            </Button>
                                        </>
                                    </td>
                                );
                            }
                            const tData = data[accessor] ? data[accessor] : "——";
                            return <td key={accessor}>{tData}</td>;
                        })}
                    </tr>
                );
            })
        ) : (
            <div className="tbodyCentered">No Results</div>
        )}
        </tbody>
    );
};

export default TableBody;
