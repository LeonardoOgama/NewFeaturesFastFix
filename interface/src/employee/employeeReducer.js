const DEFAULT_STATE = [
    {
        name: "TEste",
        services: [
            {
                descService: "TEste serviço"
            }
        ]
    }
];

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "FETCH_EMPLOYEES_FULFILLED":
            return [...action.payload.data];
        case "ADD_EMPLOYEE_FULFILLED":
            let _new = action.payload.data;
            _new.services = _new.services || [];
            return [...state, _new];
        default:
            return state;
    }

}