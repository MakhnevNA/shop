import { useCallback, useState } from "react";

type HTTPRequestMethod = "GET" | "POST" | "PATCH";

interface HTTPHeaders {
    [key: string]: string;
}
export type TLoadingStatusOptions = "idle" | "loading" | "error";

interface IRequestConfing {
    url: string;
    method?: HTTPRequestMethod;
    body?: string | null;
    headers?: HTTPHeaders;
}

export const useHttp = () => {
    const [loadingStatus, setLoadingStatus] =
        useState<TLoadingStatusOptions>("idle");

    const [error, setError] = useState<string | null>(null);

    const request = useCallback(
        async ({
            url,
            method = "GET",
            body = null,
            headers = { "Content-Type": "application/json" },
        }: IRequestConfing) => {
            setLoadingStatus("loading");

            try {
                const response = await fetch(url, { method, body, headers });

                if (!response.ok) {
                    const message = await response
                        .json()
                        .then((data) => data.message);
                    throw new Error(
                        `Could not fetch ${url}, status: ${response.status}, message: ${message}`
                    );
                }

                const data = await response.json();
                setLoadingStatus("idle");
                return data;
            } catch (e) {
                setLoadingStatus("error");
                e instanceof Error && setError(e.message);
                throw e;
            }
        },
        []
    );

    return { loadingStatus, request, error };
};
